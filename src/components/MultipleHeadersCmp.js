"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var wjcGridSheet = require("wijmo/wijmo.grid.sheet");
var wjcGrid = require("wijmo/wijmo.grid");
'use strict';
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var wijmo_angular2_grid_sheet_1 = require("wijmo/wijmo.angular2.grid.sheet");
var MultipleHeadersCmp = (function () {
    function MultipleHeadersCmp() {
    }
    MultipleHeadersCmp.prototype.flexSheetInit = function (flexSheet) {
        var self = this;
        if (flexSheet) {
            flexSheet.deferUpdate(function () {
                var colIdx, rowIdx;
                for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
                        flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
            });
        }
    };
    MultipleHeadersCmp.prototype.addRowHeader = function () {
        if (this.flexSheet) {
            this.flexSheet.rowHeaders.columns.push(new wjcGrid.Column());
        }
    };
    MultipleHeadersCmp.prototype.removeRowHeader = function () {
        var colCnt;
        if (this.flexSheet) {
            colCnt = this.flexSheet.rowHeaders.columns.length;
            this.flexSheet.rowHeaders.columns.removeAt(colCnt - 1);
        }
    };
    MultipleHeadersCmp.prototype.addColumnHeader = function () {
        if (this.flexSheet) {
            this.flexSheet.columnHeaders.rows.push(new wjcGrid.Row());
        }
    };
    MultipleHeadersCmp.prototype.removeColumnHeader = function () {
        var rowCnt;
        if (this.flexSheet) {
            rowCnt = this.flexSheet.columnHeaders.rows.length;
            this.flexSheet.columnHeaders.rows.removeAt(rowCnt - 1);
        }
    };
    return MultipleHeadersCmp;
}());
__decorate([
    core_1.ViewChild('flexSheet'),
    __metadata("design:type", wjcGridSheet.FlexSheet)
], MultipleHeadersCmp.prototype, "flexSheet", void 0);
MultipleHeadersCmp = __decorate([
    core_1.Component({
        selector: 'multiple-headers-cmp',
        templateUrl: 'src/components/multipleHeadersCmp.html',
    })
], MultipleHeadersCmp);
exports.MultipleHeadersCmp = MultipleHeadersCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: MultipleHeadersCmp }
]);
var MultipleHeadersModule = (function () {
    function MultipleHeadersModule() {
    }
    return MultipleHeadersModule;
}());
MultipleHeadersModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, routing, wijmo_angular2_grid_sheet_1.WjGridSheetModule],
        declarations: [MultipleHeadersCmp],
    })
], MultipleHeadersModule);
exports.MultipleHeadersModule = MultipleHeadersModule;
//# sourceMappingURL=MultipleHeadersCmp.js.map