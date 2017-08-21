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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var DataSvc_1 = require("../services/DataSvc");
var BindingFlexSheetBaseCmp_1 = require("./BindingFlexSheetBaseCmp");
var wijmo_angular2_grid_sheet_1 = require("wijmo/wijmo.angular2.grid.sheet");
var ExcelIOCmp = (function (_super) {
    __extends(ExcelIOCmp, _super);
    function ExcelIOCmp(dataSvc) {
        return _super.call(this, dataSvc) || this;
    }
    ExcelIOCmp.prototype.flexSheetInit = function (flexSheet) {
        var self = this;
        _super.prototype.flexSheetInit.call(this, flexSheet);
        if (flexSheet) {
            flexSheet.deferUpdate(function () {
                var colIdx, rowIdx;
                flexSheet.selectedSheetIndex = 1;
                for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
                        flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
                flexSheet.selectedSheetIndex = 0;
            });
        }
    };
    ExcelIOCmp.prototype.load = function () {
        var flexSheet = this.flexSheet, fileInput = document.getElementById('importFile');
        if (flexSheet && fileInput.files[0]) {
            flexSheet.load(fileInput.files[0]);
        }
    };
    ExcelIOCmp.prototype.save = function () {
        var flexSheet = this.flexSheet, fileName;
        if (flexSheet) {
            if (this.fileName) {
                fileName = this.fileName;
            }
            else {
                fileName = 'FlexSheet.xlsx';
            }
            flexSheet.save(fileName);
        }
    };
    return ExcelIOCmp;
}(BindingFlexSheetBaseCmp_1.BindingFlexSheetBaseCmp));
ExcelIOCmp = __decorate([
    core_1.Component({
        selector: 'excel-i-o-cmp',
        templateUrl: 'src/components/excelIOCmp.html',
    }),
    __param(0, core_1.Inject(DataSvc_1.DataSvc)),
    __metadata("design:paramtypes", [DataSvc_1.DataSvc])
], ExcelIOCmp);
exports.ExcelIOCmp = ExcelIOCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ExcelIOCmp }
]);
var ExcelIOModule = (function () {
    function ExcelIOModule() {
    }
    return ExcelIOModule;
}());
ExcelIOModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_grid_sheet_1.WjGridSheetModule],
        declarations: [ExcelIOCmp],
    })
], ExcelIOModule);
exports.ExcelIOModule = ExcelIOModule;
//# sourceMappingURL=ExcelIOCmp.js.map