

import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';



'use strict';

import { Component, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';

@Component({
    selector: 'cell-merging-cmp',
    templateUrl: 'src/components/cellMergingCmp.html'
})
export class CellMergingCmp {
    mergeState: any = {};

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

            flexSheet.selectionChanged.addHandler(() => {
                self.mergeState = flexSheet.getSelectionFormatState();
            });
        }
    }

    mergeCells() {
        if (this.flexSheet) {
            this.flexSheet.mergeRange();
            this.mergeState = this.flexSheet.getSelectionFormatState();
        }
    }
}


const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: CellMergingCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridSheetModule],
    declarations: [CellMergingCmp],
})
export class CellMergingModule {
}

