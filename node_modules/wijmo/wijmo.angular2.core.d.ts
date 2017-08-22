import { EventEmitter, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { ElementRef, Injector } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { IWjComponentMetadata, IWjDirectiveMeta } from 'wijmo/wijmo.angular2.directiveBase';
export declare var wjTooltipMeta: IWjDirectiveMeta;
export declare class WjTooltip implements OnInit, OnDestroy, AfterViewInit {
    private static _toolTip;
    private _toolTipText;
    private _elRef;
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    isInitialized: boolean;
    initialized: EventEmitter<{}>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    wjTooltip: string;
}
export declare class WjComponentLoader implements AfterViewInit {
    private _cmpResolver;
    private _elementRef;
    private _component;
    private _properties;
    private _cmpRef;
    private _isViewInit;
    private _anchor;
    propertiesChange: EventEmitter<{}>;
    constructor(_cmpResolver: ComponentFactoryResolver, _elementRef: ElementRef);
    component: any;
    properties: Object;
    ngAfterViewInit(): void;
    private _createComponent();
    private _updateProperties();
    private _addPropListener(component, propName, propChange);
}
export declare class WjCoreModule {
}
