import * as wjcGrid from 'wijmo/wijmo.grid';
import { EventEmitter, AfterViewInit } from '@angular/core';
import { ElementRef, Injector, ViewContainerRef, TemplateRef, Renderer } from '@angular/core';
import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import * as ngCore from '@angular/core';
import { IWjComponentMetadata, IWjComponentMeta } from 'wijmo/wijmo.angular2.directiveBase';
export declare var wjFlexGridMeta: IWjComponentMeta;
export declare class WjFlexGrid extends wjcGrid.FlexGrid implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    isInitialized: boolean;
    initialized: EventEmitter<{}>;
    wjModelProperty: string;
    gotFocusNg: EventEmitter<{}>;
    lostFocusNg: EventEmitter<{}>;
    beginningEditNg: EventEmitter<{}>;
    cellEditEndedNg: EventEmitter<{}>;
    cellEditEndingNg: EventEmitter<{}>;
    prepareCellForEditNg: EventEmitter<{}>;
    formatItemNg: EventEmitter<{}>;
    resizingColumnNg: EventEmitter<{}>;
    resizedColumnNg: EventEmitter<{}>;
    autoSizingColumnNg: EventEmitter<{}>;
    autoSizedColumnNg: EventEmitter<{}>;
    draggingColumnNg: EventEmitter<{}>;
    draggingColumnOverNg: EventEmitter<{}>;
    draggedColumnNg: EventEmitter<{}>;
    sortingColumnNg: EventEmitter<{}>;
    sortedColumnNg: EventEmitter<{}>;
    resizingRowNg: EventEmitter<{}>;
    resizedRowNg: EventEmitter<{}>;
    autoSizingRowNg: EventEmitter<{}>;
    autoSizedRowNg: EventEmitter<{}>;
    draggingRowNg: EventEmitter<{}>;
    draggingRowOverNg: EventEmitter<{}>;
    draggedRowNg: EventEmitter<{}>;
    deletingRowNg: EventEmitter<{}>;
    deletedRowNg: EventEmitter<{}>;
    loadingRowsNg: EventEmitter<{}>;
    loadedRowsNg: EventEmitter<{}>;
    rowEditStartingNg: EventEmitter<{}>;
    rowEditStartedNg: EventEmitter<{}>;
    rowEditEndingNg: EventEmitter<{}>;
    rowEditEndedNg: EventEmitter<{}>;
    rowAddedNg: EventEmitter<{}>;
    groupCollapsedChangedNg: EventEmitter<{}>;
    groupCollapsedChangingNg: EventEmitter<{}>;
    itemsSourceChangedNg: EventEmitter<{}>;
    selectionChangingNg: EventEmitter<{}>;
    selectionChangedNg: EventEmitter<{}>;
    scrollPositionChangedNg: EventEmitter<{}>;
    updatingViewNg: EventEmitter<{}>;
    updatedViewNg: EventEmitter<{}>;
    updatingLayoutNg: EventEmitter<{}>;
    updatedLayoutNg: EventEmitter<{}>;
    pastingNg: EventEmitter<{}>;
    pastedNg: EventEmitter<{}>;
    pastingCellNg: EventEmitter<{}>;
    pastedCellNg: EventEmitter<{}>;
    copyingNg: EventEmitter<{}>;
    copiedNg: EventEmitter<{}>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any, cdRef: ChangeDetectorRef);
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export declare var wjFlexGridColumnMeta: IWjComponentMeta;
export declare class WjFlexGridColumn extends wjcGrid.Column implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    isInitialized: boolean;
    initialized: EventEmitter<{}>;
    wjProperty: string;
    isSelectedChangePC: EventEmitter<{}>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export declare class WjFlexGridCellTemplate implements ngCore.OnInit, ngCore.OnDestroy {
    viewContainerRef: ViewContainerRef;
    templateRef: TemplateRef<any>;
    elRef: ElementRef;
    private domRenderer;
    cdRef: ChangeDetectorRef;
    wjFlexGridCellTemplate: any;
    cellTypeStr: string;
    cellOverflow: string;
    cellType: CellTemplateType;
    valuePaths: Object;
    autoSizeRows: boolean;
    grid: WjFlexGrid;
    column: WjFlexGridColumn;
    ownerControl: any;
    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>, elRef: ElementRef, parentCmp: any, domRenderer: Renderer, injector: Injector, cdRef: ChangeDetectorRef);
    static _getTemplContextProp(templateType: CellTemplateType): string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    _instantiateTemplate(parent: HTMLElement): {
        viewRef: ngCore.EmbeddedViewRef<any>;
        rootElement: Element;
    };
    private _attachToControl();
}
export declare enum CellTemplateType {
    Cell = 0,
    CellEdit = 1,
    ColumnHeader = 2,
    RowHeader = 3,
    RowHeaderEdit = 4,
    TopLeft = 5,
    GroupHeader = 6,
    Group = 7,
    NewCellTemplate = 8,
    ColumnFooter = 9,
    BottomLeft = 10,
}
export declare class WjGridModule {
}
