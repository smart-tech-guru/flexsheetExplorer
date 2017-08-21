
///<reference path="../typings/globals/core-js/index.d.ts"/>





// Angular
import { Component, EventEmitter, Inject, enableProdMode, NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes } from '@angular/router';
import {routes, routing} from './app.routing';
import { DataSvc } from './services/DataSvc';

    'use strict';

    // The Explorer application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
    })
    export class AppCmp {
        // Used to show navigation links in markup.
        routes: Routes = routes;
    }


    @NgModule({
        imports: [BrowserModule, routing],
        declarations: [AppCmp],
        providers: [DataSvc],
        bootstrap: [AppCmp]
    })
    export class AppModule {
    }


    enableProdMode();
    // Bootstrap application 
    platformBrowserDynamic().bootstrapModule(AppModule);
