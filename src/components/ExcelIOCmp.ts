

import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';



'use strict';

import { Component, Inject, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { DataSvc } from '../services/DataSvc';
import { BindingFlexSheetBaseCmp } from './BindingFlexSheetBaseCmp';
import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';

@Component({
    selector: 'excel-i-o-cmp',
    templateUrl: 'src/components/excelIOCmp.html',
})
export class ExcelIOCmp extends BindingFlexSheetBaseCmp {
    fileName: string;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }

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
    { path: '', component: ExcelIOCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjGridSheetModule],
    declarations: [ExcelIOCmp],
})
export class ExcelIOModule {
}

