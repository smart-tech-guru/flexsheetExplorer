import * as wjcNav from 'wijmo/wijmo.nav';
import { EventEmitter, AfterViewInit } from '@angular/core';
import { ElementRef, Injector } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { IWjComponentMetadata, IWjComponentMeta } from 'wijmo/wijmo.angular2.directiveBase';
export declare var wjTreeViewMeta: IWjComponentMeta;
export declare class WjTreeView extends wjcNav.TreeView implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    isInitialized: boolean;
    initialized: EventEmitter<{}>;
    wjModelProperty: string;
    gotFocusNg: EventEmitter<{}>;
    lostFocusNg: EventEmitter<{}>;
    itemsSourceChangedNg: EventEmitter<{}>;
    loadingItemsNg: EventEmitter<{}>;
    loadedItemsNg: EventEmitter<{}>;
    itemClickedNg: EventEmitter<{}>;
    selectedItemChangedNg: EventEmitter<{}>;
    selectedItemChangePC: EventEmitter<{}>;
    selectedNodeChangePC: EventEmitter<{}>;
    checkedItemsChangedNg: EventEmitter<{}>;
    checkedItemsChangePC: EventEmitter<{}>;
    isCollapsedChangingNg: EventEmitter<{}>;
    isCollapsedChangedNg: EventEmitter<{}>;
    isCheckedChangingNg: EventEmitter<{}>;
    isCheckedChangedNg: EventEmitter<{}>;
    formatItemNg: EventEmitter<{}>;
    dragStartNg: EventEmitter<{}>;
    dragOverNg: EventEmitter<{}>;
    dropNg: EventEmitter<{}>;
    dragEndNg: EventEmitter<{}>;
    nodeEditStartingNg: EventEmitter<{}>;
    nodeEditStartedNg: EventEmitter<{}>;
    nodeEditEndingNg: EventEmitter<{}>;
    nodeEditEndedNg: EventEmitter<{}>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export declare class WjNavModule {
}
