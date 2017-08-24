

import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';



'use strict';

import {Component, Input, ComponentFactory, ViewEncapsulation, ComponentRef, ViewContainerRef, ViewChild, ComponentFactoryResolver,
    ReflectiveInjector, OnInit, NgModule, ModuleWithProviders, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }        from '@angular/router';
import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';
import {ContextMenuComponent} from './newComponent/contextmenu/contextmenu.component';

@Component({
    selector: 'intro-cmp',
    templateUrl: 'src/components/introCmp.html',
    entryComponents: [ContextMenuComponent],
    
})
export class IntroCmp {
    // references FlexSheet named 'flexSheet' in the view
    @ViewChild('flexSheet') flexSheet: wjcGridSheet.FlexSheet;
    @ViewChild('dynamicContextMenuContainer', { read: ViewContainerRef }) container: ViewContainerRef;
    componentRef: ComponentRef < any > ;
    prev_selection: any = {
        _row: 0,
        _row2: 0,
        _col: 0,
        _col2: 0
    };
    showChild: boolean;
    

    flexSheetInit(flexSheet: wjcGridSheet.FlexSheet) {
        if (flexSheet) {
            flexSheet.selectedSheetIndex = 0;
        }
        flexSheet.prepareCellForEdit.addHandler(() => {
           this.prev_selection = flexSheet.selection;
           const top = flexSheet.selection._row * 28 + 65 + flexSheet.scrollPosition.y; 
           const left = flexSheet.selection._col * 112 + 25 + flexSheet.scrollPosition.x;
           this.createComponent(top, left);  
        });
        flexSheet.selectionChanged.addHandler( ()=> {
            if (!(this.prev_selection._row + 1 === flexSheet.selection._row && this.prev_selection._col === flexSheet.selection._col)) {
                this.container.clear();
            }
        });
        flexSheet.scrollPositionChanged.addHandler(() => { 
            this.container.clear();
        });
        flexSheet.columnHeaders.columns.collectionChanged.addHandler(() => {
            console.log('col changed');
        });
    }

    constructor(private resolver: ComponentFactoryResolver) {
    }

    createComponent(top: number, left: number) {
        console.log('here');
        const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(ContextMenuComponent);
        this.componentRef = this.container.createComponent(factory);

        this.componentRef.instance.top = top;
        this.componentRef.instance.left = left; 
        this.componentRef.instance.result.subscribe(() => this.removeComponent());
    }

    removeComponent() {
        this.container.clear();
    }
}


const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: IntroCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridSheetModule],
    declarations: [IntroCmp,ContextMenuComponent],
})
export class IntroModule {
}

