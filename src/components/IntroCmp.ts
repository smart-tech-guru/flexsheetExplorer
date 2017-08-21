

import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';



'use strict';

import { Component, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';

@Component({
    selector: 'intro-cmp',
    templateUrl: 'src/components/introCmp.html',
})
export class IntroCmp {
    // references FlexSheet named 'flexSheet' in the view
    @ViewChild('flexSheet') flexSheet: wjcGridSheet.FlexSheet;

    flexSheetInit(flexSheet: wjcGridSheet.FlexSheet) {
        if (flexSheet) {
            flexSheet.selectedSheetIndex = 0;
        }
    }
}


const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: IntroCmp }
]);


@NgModule({
    imports: [CommonModule, routing, WjGridSheetModule],
    declarations: [IntroCmp],
})
export class IntroModule {
}

