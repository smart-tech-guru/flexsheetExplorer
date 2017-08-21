

import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';
import * as wjcGrid from 'wijmo/wijmo.grid';



'use strict';

import { Component, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';

@Component({
    selector: 'multiple-headers-cmp',
    templateUrl: 'src/components/multipleHeadersCmp.html',
})
export class MultipleHeadersCmp {
    // references FlexSheet named 'flexSheet' in the view
    @ViewChild('flexSheet') flexSheet: wjcGridSheet.FlexSheet;

    flexSheetInit(flexSheet: wjcGridSheet.FlexSheet) {
        var self = this;

        if (flexSheet) {
            flexSheet.deferUpdate(() => {
                var colIdx: number,
                    rowIdx: number;

                for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
                        flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
            });
        }
    }

    addRowHeader () {
        if (this.flexSheet) {
            this.flexSheet.rowHeaders.columns.push(new wjcGrid.Column());
        }
    }

    removeRowHeader() {
        var colCnt: number;
        if (this.flexSheet) {
            colCnt = this.flexSheet.rowHeaders.columns.length;
            this.flexSheet.rowHeaders.columns.removeAt(colCnt - 1);
        }
    }

    addColumnHeader () {
        if (this.flexSheet) {
            this.flexSheet.columnHeaders.rows.push(new wjcGrid.Row());
        }
    }

    removeColumnHeader() {
        var rowCnt: number;
        if (this.flexSheet) {
            rowCnt = this.flexSheet.columnHeaders.rows.length;
            this.flexSheet.columnHeaders.rows.removeAt(rowCnt - 1);
        }
    }
}


const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: MultipleHeadersCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridSheetModule],
    declarations: [MultipleHeadersCmp],
})
export class MultipleHeadersModule {
}

