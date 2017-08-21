




'use strict';

import { Component, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';
import { DataSvc } from '../services/DataSvc';
import { BindingFlexSheetBaseCmp } from './BindingFlexSheetBaseCmp';

@Component({
    selector: 'data-binding-cmp',
    templateUrl: 'src/components/dataBindingCmp.html',
})
export class DataBindingCmp extends BindingFlexSheetBaseCmp {
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}


const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: DataBindingCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridSheetModule],
    declarations: [DataBindingCmp],
})
export class DataBindingModule {
}

