

import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';
import * as wjcGrid from 'wijmo/wijmo.grid';



'use strict';

import {Component, EventEmitter, Inject, Input, ViewChild } from '@angular/core';
import { DataSvc } from '../services/DataSvc';


// Base class for all components demonstrating Binding FlexSheet control.
@Component({
    selector: '',
    templateUrl: ''
})
export abstract class BindingFlexSheetBaseCmp {
    protected dataSvc: DataSvc;
    data: any[];

    // references FlexSheet named 'flexSheet' in the view
    @ViewChild('flexSheet') flexSheet: wjcGridSheet.FlexSheet;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.dataSvc = dataSvc;
        this.data = dataSvc.getData(50);
    }

    flexSheetInit(flexSheet: wjcGridSheet.FlexSheet) {
        var self = this;

        if (flexSheet) {
            flexSheet.deferUpdate(() => {
                for (var i = 0; i < flexSheet.sheets.length; i++) {
                    flexSheet.sheets.selectedIndex = i;
                    if (flexSheet.sheets[i].name === 'Country') {
                        flexSheet.selectedSheet.itemsSource = self.data;
                        self._initDataMapForBindingSheet(flexSheet);
                    }
                }
                flexSheet.selectedSheetIndex = 0;
            });
        }
    }

    // initialize the dataMap for the bound sheet.
    private _initDataMapForBindingSheet(flexSheet) {
        var column;

        if (flexSheet) {
            column = flexSheet.columns.getColumn('countryId');
            if (column && !column.dataMap) {
                column.dataMap = this._buildDataMap(this.dataSvc.countries);
            }
            column = flexSheet.columns.getColumn('productId');
            if (column && !column.dataMap) {
                column.width = 100;
                column.dataMap = this._buildDataMap(this.dataSvc.products);
            }
            column = flexSheet.columns.getColumn('amount');
            if (column) {
                column.format = 'c2';
            }
        }
    }

    // build a data map from a string array using the indices as keys
    private _buildDataMap(items) {
        var map = [];
        for (var i = 0; i < items.length; i++) {
            map.push({ key: i, value: items[i] });
        }
        return new wjcGrid.DataMap(map, 'key', 'value');
    }
}
