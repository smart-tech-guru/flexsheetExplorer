

import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';
import * as wjcGrid from 'wijmo/wijmo.grid';



'use strict';

import { Component, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';

@Component({
    selector: 'drag-drop-cmp',
    templateUrl: 'src/components/dragDropCmp.html',
})
export class DragDropCmp {
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
                flexSheet.applyCellsStyle({ fontWeight: 'bold' }, [new wjcGrid.CellRange(0, 0, 9, 0),
                    new wjcGrid.CellRange(10, 1, 19, 1)]);
                flexSheet.applyCellsStyle({ textDecoration: 'underline' }, [new wjcGrid.CellRange(0, 2, 9, 2),
                    new wjcGrid.CellRange(10, 3, 19, 3)]);
                flexSheet.applyCellsStyle({ fontStyle: 'italic' }, [new wjcGrid.CellRange(0, 4, 9, 4),
                    new wjcGrid.CellRange(10, 5, 19, 5)]);
                flexSheet.applyCellsStyle({ format: 'c2' }, [new wjcGrid.CellRange(0, 0, 9, 7)]);
                flexSheet.applyCellsStyle({ backgroundColor: '#4488CC' }, [new wjcGrid.CellRange(0, 0, 19, 0),
                    new wjcGrid.CellRange(0, 2, 19, 2), new wjcGrid.CellRange(0, 4, 19, 4)]);
                flexSheet.applyCellsStyle({ color: '#CC8844' }, [new wjcGrid.CellRange(0, 1, 19, 1),
                    new wjcGrid.CellRange(0, 3, 19, 3), new wjcGrid.CellRange(0, 5, 19, 5)]);
                flexSheet.applyCellsStyle({ color: '#336699' }, [new wjcGrid.CellRange(0, 6, 9, 7)]);
                flexSheet.applyCellsStyle({ backgroundColor: '#996633' }, [new wjcGrid.CellRange(10, 6, 19, 7)]);
            });
        }
    }
}


const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: DragDropCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridSheetModule],
    declarations: [DragDropCmp],
})
export class DragDropModule {
}

