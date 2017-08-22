import * as wjcViewer from 'wijmo/wijmo.viewer';
import * as wjcCore from 'wijmo/wijmo';
import { EventEmitter, AfterViewInit } from '@angular/core';
import { ElementRef, Injector } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { IWjComponentMetadata, IWjComponentMeta } from 'wijmo/wijmo.angular2.directiveBase';
export declare var wjReportViewerMeta: IWjComponentMeta;
export declare class WjReportViewer extends wjcViewer.ReportViewer implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    isInitialized: boolean;
    initialized: EventEmitter<{}>;
    wjModelProperty: string;
    pageIndexChangedNg: EventEmitter<{}>;
    viewModeChangedNg: EventEmitter<{}>;
    viewModeChangePC: EventEmitter<{}>;
    mouseModeChangedNg: EventEmitter<{}>;
    mouseModeChangePC: EventEmitter<{}>;
    selectMouseModeChangedNg: EventEmitter<{}>;
    selectMouseModeChangePC: EventEmitter<{}>;
    fullScreenChangedNg: EventEmitter<{}>;
    fullScreenChangePC: EventEmitter<{}>;
    zoomFactorChangedNg: EventEmitter<{}>;
    zoomFactorChangePC: EventEmitter<{}>;
    queryLoadingDataNg: EventEmitter<{}>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onSelectMouseModeChanged(e?: wjcCore.EventArgs): void;
}
export declare var wjPdfViewerMeta: IWjComponentMeta;
export declare class WjPdfViewer extends wjcViewer.PdfViewer implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    isInitialized: boolean;
    initialized: EventEmitter<{}>;
    wjModelProperty: string;
    pageIndexChangedNg: EventEmitter<{}>;
    viewModeChangedNg: EventEmitter<{}>;
    viewModeChangePC: EventEmitter<{}>;
    mouseModeChangedNg: EventEmitter<{}>;
    mouseModeChangePC: EventEmitter<{}>;
    selectMouseModeChangedNg: EventEmitter<{}>;
    selectMouseModeChangePC: EventEmitter<{}>;
    fullScreenChangedNg: EventEmitter<{}>;
    fullScreenChangePC: EventEmitter<{}>;
    zoomFactorChangedNg: EventEmitter<{}>;
    zoomFactorChangePC: EventEmitter<{}>;
    queryLoadingDataNg: EventEmitter<{}>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onSelectMouseModeChanged(e?: wjcCore.EventArgs): void;
}
export declare class WjViewerModule {
}
