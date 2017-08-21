import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';
import { DataSvc } from '../services/DataSvc';
import { BindingFlexSheetBaseCmp } from './BindingFlexSheetBaseCmp';
export declare class FilteringCmp extends BindingFlexSheetBaseCmp {
    filterEnable: boolean;
    constructor(dataSvc: DataSvc);
    flexSheetInit(flexSheet: wjcGridSheet.FlexSheet): void;
    showFilter(): void;
}
export declare class FilteringModule {
}
