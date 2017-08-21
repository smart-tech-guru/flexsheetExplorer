import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';
import { DataSvc } from '../services/DataSvc';
export declare abstract class BindingFlexSheetBaseCmp {
    protected dataSvc: DataSvc;
    data: any[];
    flexSheet: wjcGridSheet.FlexSheet;
    constructor(dataSvc: DataSvc);
    flexSheetInit(flexSheet: wjcGridSheet.FlexSheet): void;
    private _initDataMapForBindingSheet(flexSheet);
    private _buildDataMap(items);
}
