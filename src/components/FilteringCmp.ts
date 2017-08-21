

import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';



'use strict';

import { Component, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { DataSvc } from '../services/DataSvc';
import { BindingFlexSheetBaseCmp } from './BindingFlexSheetBaseCmp';
import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';

@Component({
    selector: 'filtering-cmp',
    templateUrl: 'src/components/filteringCmp.html',
    //directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
})
export class FilteringCmp extends BindingFlexSheetBaseCmp {

    filterEnable: boolean = false;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }

    flexSheetInit(flexSheet: wjcGridSheet.FlexSheet) {
        super.flexSheetInit(flexSheet);

        if (flexSheet) {
            this.filterEnable = !!flexSheet.itemsSource;
        }
    }

    // Show the column filter for the flexSheet control.
    showFilter() {
        if (this.flexSheet) {
            this.flexSheet.showColumnFilter();
        }
    }
}


const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: FilteringCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridSheetModule],
    declarations: [FilteringCmp],
})
export class FilteringModule {
}

