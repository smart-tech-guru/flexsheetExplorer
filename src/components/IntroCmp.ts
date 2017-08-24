

import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';



'use strict';

import {Component, Input, ComponentFactory, ViewEncapsulation, ComponentRef, ViewContainerRef, ViewChild, ComponentFactoryResolver, Inject,
    ReflectiveInjector, OnInit, NgModule, ModuleWithProviders, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }        from '@angular/router';
import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';
import {ContextMenuComponent} from './newComponent/contextmenu/contextmenu.component';
import { FormsModule } from '@angular/forms';
import { DataSvc } from '../services/DataSvc';
import { BindingFlexSheetBaseCmp } from './BindingFlexSheetBaseCmp';

@Component({
    selector: 'intro-cmp',
    templateUrl: 'src/components/introCmp.html',
    entryComponents: [ContextMenuComponent],    
})
export class IntroCmp extends BindingFlexSheetBaseCmp {
    // references FlexSheet named 'flexSheet' in the view
    @ViewChild('flexSheet') flexSheet: wjcGridSheet.FlexSheet;
    @ViewChild('dynamicContextMenuContainer', { read: ViewContainerRef }) container: ViewContainerRef;
    @ViewChild('sum') sumElement: ElementRef;
    componentRef: ComponentRef < any > ;
    prev_selection: any = {
        _row: 0,
        _row2: 0,
        _col: 0,
        _col2: 0
    };
    showChild: boolean;
    fileName: string;

    flexSheetInit(flexSheet: wjcGridSheet.FlexSheet) {
        var self = this;
        
        super.flexSheetInit(flexSheet);

        if (flexSheet) {
            flexSheet.deferUpdate(() => {
                var colIdx: number,
                    rowIdx: number;

                flexSheet.selectedSheetIndex = 1;

                for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
                        flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }

                flexSheet.selectedSheetIndex = 0;
            });
        }
        
        const columns = ['A','B','C','D','E','F','G','H', 'I', 'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        
        console.log(this.sumElement.nativeElement.innerHTML);

        flexSheet.prepareCellForEdit.addHandler((event) => {
            console.log(event);
           this.prev_selection = flexSheet.selection;
           const cell_width = flexSheet.getCellBoundingRect(0,0).width;
           const cell_height = flexSheet.getCellBoundingRect(0,0).height;
           const top = flexSheet.selection._row * cell_height + 2.3 * cell_height + flexSheet.scrollPosition.y; 
           const left = flexSheet.selection._col * cell_width + 25 + flexSheet.scrollPosition.x;
        
           this.createComponent(top, left, cell_width + 20);  
        });
        flexSheet.selectionChanged.addHandler( ()=> {
            console.log(flexSheet.selection);
            const selection = flexSheet.selection;
            //"=sum(B2:D4)"
            if ( selection._col < 0 || selection._col2 < 0 || selection._row < 0 || selection._row2 < 0 ) return;
            const query: string = '=sum(' + columns[selection._col2] + (selection._row2+1) + ':' + columns[selection._col] + (selection._row+1) + ')';
            const firstRowColValue = flexSheet.getCellValue(selection._row2,selection._col2, true);
            const firstRowColData = flexSheet.getCellData(selection._row2,selection._col2, true);
            console.log(firstRowColValue);
            flexSheet.setCellData(selection._row2,selection._col2, query);
            console.log(flexSheet.getCellValue(selection._row2,selection._col2, true));
            let val = parseInt(flexSheet.getCellValue(selection._row2,selection._col2, true)) + parseInt(firstRowColValue);
            flexSheet.setCellData(selection._row2,selection._col2, firstRowColData);
            if (isNaN(val)) val = 0;
            console.log('val', val);
            
            this.sumElement.nativeElement.innerHTML = val;
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

    constructor( @Inject(DataSvc) dataSvc: DataSvc,private resolver:ComponentFactoryResolver) {
        super(dataSvc);
    }

    createComponent(top: number, left: number, width: number) {
        console.log('here');
        const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(ContextMenuComponent);
        this.componentRef = this.container.createComponent(factory);

        this.componentRef.instance.top = top;
        this.componentRef.instance.left = left; 
        this.componentRef.instance.width = width;         
        this.componentRef.instance.result.subscribe(() => this.removeComponent());
    }

    removeComponent() {
        this.container.clear();
    }
    load () {
        var flexSheet = this.flexSheet,
            fileInput = <HTMLInputElement>document.getElementById('importFile');
        if (flexSheet && fileInput.files[0]) {
            flexSheet.load(fileInput.files[0]);
        }
    }

    save () {
        var flexSheet = this.flexSheet,
            fileName;
        if (flexSheet) {
            if (this.fileName) {
                fileName = this.fileName;
            } else {
                fileName = 'FlexSheet.xlsx';
            }
            flexSheet.save(fileName);
        }
    }
}


const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: IntroCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjGridSheetModule],
    declarations: [IntroCmp,ContextMenuComponent],
})
export class IntroModule {
}

