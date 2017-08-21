import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';
import * as wjcInput from 'wijmo/wijmo.input';
export declare class FormatCellsCmp {
    fonts: any[];
    fontSizeList: any[];
    selectionFormatState: wjcGridSheet.IFormatState;
    selection: any;
    private _updatingSelection;
    private _applyFillColor;
    private _format;
    flexSheet: wjcGridSheet.FlexSheet;
    cboFontName: wjcInput.ComboBox;
    cboFontSize: wjcInput.ComboBox;
    colorPicker: wjcInput.ColorPicker;
    constructor();
    format: string;
    flexSheetInit(flexSheet: wjcGridSheet.FlexSheet): void;
    cboFontNameInit(cboFontName: wjcInput.ComboBox): void;
    cboFontSizeInit(cboFontSize: wjcInput.ComboBox): void;
    colorPickerInit(colorPicker: wjcInput.ColorPicker): void;
    applyCellTextAlign(textAlign: any): void;
    applyBoldStyle(): void;
    applyUnderlineStyle(): void;
    applyItalicStyle(): void;
    showColorPicker(e: any, isFillColor: any): void;
    private _updateSelection(sel);
    private _checkFontfamily(fontFamily);
    private _checkFontSize(fontSize);
    private _cumulativeOffset(element);
}
export declare class FormatCellsModule {
}
