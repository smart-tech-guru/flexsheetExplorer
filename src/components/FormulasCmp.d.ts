import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';
export declare class FormulasCmp {
    flexSheet: wjcGridSheet.FlexSheet;
    flexSheetInit(flexSheet: wjcGridSheet.FlexSheet): void;
    private _generateBasicOperatorsSheet(flexSheet);
    private _generateMathSheet(flexSheet);
    private _generateLogicalSheet(flexSheet);
    private _generateTextSheet(flexSheet);
    private _generateAggregateSheet(flexSheet);
    private _generateDateSheet(flexSheet);
    private _generateLookupReferenceSheet(flexSheet);
    private _generateFinancialSheet(flexSheet);
    private _generateSummraySheet(flexSheet);
}
export declare class FormulasModule {
}
