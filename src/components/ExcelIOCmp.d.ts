import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';
import { DataSvc } from '../services/DataSvc';
import { BindingFlexSheetBaseCmp } from './BindingFlexSheetBaseCmp';
export declare class ExcelIOCmp extends BindingFlexSheetBaseCmp {
    fileName: string;
    constructor(dataSvc: DataSvc);
    flexSheetInit(flexSheet: wjcGridSheet.FlexSheet): void;
    load(): void;
    save(): void;
}
export declare class ExcelIOModule {
}
