import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';
import { DataSvc } from '../services/DataSvc';
import { BindingFlexSheetBaseCmp } from './BindingFlexSheetBaseCmp';
export declare class SortingCmp extends BindingFlexSheetBaseCmp {
    sortManager: wjcGridSheet.SortManager;
    columns: string[];
    constructor(dataSvc: DataSvc);
    flexSheetInit(flexSheet: wjcGridSheet.FlexSheet): void;
    commitSort(): void;
    cancelSort(): void;
    addSortLevel(): void;
    deleteSortLevel(): void;
    copySortLevel(): void;
    moveSortLevel(offset: any): void;
    applySortColumnIndex(e: any, sortItem: any): void;
    applySortAscending(e: any, sortItem: any): void;
    private _getColumns();
}
export declare class SortingModule {
}
