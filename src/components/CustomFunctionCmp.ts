import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';

import { Component, ViewChild, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }        from '@angular/router';
import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';

'use strict';

@Component({
    selector: 'custom-function-cmp',
    templateUrl: 'src/components/customFunctionCmp.html'
})
export class CustomFunctionCmp {
    // references FlexSheet named 'flexSheet' in the view
    @ViewChild('flexSheet') flexSheet: wjcGridSheet.FlexSheet;

    flexSheetInit(flexSheet: wjcGridSheet.FlexSheet) {
        if (flexSheet) {
            flexSheet.addFunction('customSumProduct', (...params: any[][][]) => {
                let result = 0,
                    range1 = params[0],
                    range2 = params[1];

                if (range1.length > 0 && range1.length === range2.length && range1[0].length === range2[0].length) {
                    for (let i = 0; i < range1.length; i++) {
                        for (let j = 0; j < range1[0].length; j++) {
                            result += range1[i][j] * range2[i][j];
                        }
                    }
                }
                return result;
            }, 'Custom SumProduct Function', 2, 2);

            flexSheet.unknownFunction.addHandler((sender: any, e: wjcGridSheet.UnknownFunctionEventArgs) => {
                let result = '';
                if (e.params) {
                    for (let i = 0; i < e.params.length; i++) {
                        result += e.params[i];
                    }
                }
                e.value = result;
            });

            flexSheet.deferUpdate(() => {
                for (let i = 0; i < flexSheet.sheets.length; i++) {
                    flexSheet.sheets.selectedIndex = i;
                    switch (flexSheet.sheets[i].name) {
                        case 'Custom Function':
                            flexSheet.setCellData(0, 0, '=customSumProduct(Data!A1:B5, Data!B1:C5)');
                            flexSheet.setCellData(1, 0, '=customFunc(1, "B", 3)');
                            break;
                        case 'Data':
                            for (let ri = 0; ri < flexSheet.rows.length; ri++) {
                                for (let ci = 0; ci < 3; ci++) {
                                    flexSheet.setCellData(ri, ci, ri + ci);
                                }
                            }
                            break;
                    }
                }
                flexSheet.selectedSheetIndex = 0;
            });
        }
    }
}


const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: CustomFunctionCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridSheetModule],
    declarations: [CustomFunctionCmp],
})
export class CustomFunctionModule {
}

