'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var DataSvc_1 = require("../services/DataSvc");
var BindingFlexSheetBaseCmp_1 = require("./BindingFlexSheetBaseCmp");
var wijmo_angular2_grid_sheet_1 = require("wijmo/wijmo.angular2.grid.sheet");
var FilteringCmp = (function (_super) {
    __extends(FilteringCmp, _super);
    function FilteringCmp(dataSvc) {
        var _this = _super.call(this, dataSvc) || this;
        _this.filterEnable = false;
        return _this;
    }
    FilteringCmp.prototype.flexSheetInit = function (flexSheet) {
        _super.prototype.flexSheetInit.call(this, flexSheet);
        if (flexSheet) {
            this.filterEnable = !!flexSheet.itemsSource;
        }
    };
    // Show the column filter for the flexSheet control.
    FilteringCmp.prototype.showFilter = function () {
        if (this.flexSheet) {
            this.flexSheet.showColumnFilter();
        }
    };
    return FilteringCmp;
}(BindingFlexSheetBaseCmp_1.BindingFlexSheetBaseCmp));
FilteringCmp = __decorate([
    core_1.Component({
        selector: 'filtering-cmp',
        templateUrl: 'src/components/filteringCmp.html',
    }),
    __param(0, core_1.Inject(DataSvc_1.DataSvc)),
    __metadata("design:paramtypes", [DataSvc_1.DataSvc])
], FilteringCmp);
exports.FilteringCmp = FilteringCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: FilteringCmp }
]);
var FilteringModule = (function () {
    function FilteringModule() {
    }
    return FilteringModule;
}());
FilteringModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, routing, wijmo_angular2_grid_sheet_1.WjGridSheetModule],
        declarations: [FilteringCmp],
    })
], FilteringModule);
exports.FilteringModule = FilteringModule;
//# sourceMappingURL=FilteringCmp.js.map