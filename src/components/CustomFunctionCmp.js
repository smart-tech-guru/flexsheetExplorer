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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var wijmo_angular2_grid_sheet_1 = require("wijmo/wijmo.angular2.grid.sheet");
'use strict';
var CustomFunctionCmp = (function () {
    function CustomFunctionCmp() {
    }
    CustomFunctionCmp.prototype.flexSheetInit = function (flexSheet) {
        if (flexSheet) {
            flexSheet.addFunction('customSumProduct', function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                var result = 0, range1 = params[0], range2 = params[1];
                if (range1.length > 0 && range1.length === range2.length && range1[0].length === range2[0].length) {
                    for (var i = 0; i < range1.length; i++) {
                        for (var j = 0; j < range1[0].length; j++) {
                            result += range1[i][j] * range2[i][j];
                        }
                    }
                }
                return result;
            }, 'Custom SumProduct Function', 2, 2);
            flexSheet.unknownFunction.addHandler(function (sender, e) {
                var result = '';
                if (e.params) {
                    for (var i = 0; i < e.params.length; i++) {
                        result += e.params[i];
                    }
                }
                e.value = result;
            });
            flexSheet.deferUpdate(function () {
                for (var i = 0; i < flexSheet.sheets.length; i++) {
                    flexSheet.sheets.selectedIndex = i;
                    switch (flexSheet.sheets[i].name) {
                        case 'Custom Function':
                            flexSheet.setCellData(0, 0, '=customSumProduct(Data!A1:B5, Data!B1:C5)');
                            flexSheet.setCellData(1, 0, '=customFunc(1, "B", 3)');
                            break;
                        case 'Data':
                            for (var ri = 0; ri < flexSheet.rows.length; ri++) {
                                for (var ci = 0; ci < 3; ci++) {
                                    flexSheet.setCellData(ri, ci, ri + ci);
                                }
                            }
                            break;
                    }
                }
                flexSheet.selectedSheetIndex = 0;
            });
        }
    };
    return CustomFunctionCmp;
}());
__decorate([
    core_1.ViewChild('flexSheet'),
    __metadata("design:type", wjcGridSheet.FlexSheet)
], CustomFunctionCmp.prototype, "flexSheet", void 0);
CustomFunctionCmp = __decorate([
    core_1.Component({
        selector: 'custom-function-cmp',
        templateUrl: 'src/components/customFunctionCmp.html'
    })
], CustomFunctionCmp);
exports.CustomFunctionCmp = CustomFunctionCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: CustomFunctionCmp }
]);
var CustomFunctionModule = (function () {
    function CustomFunctionModule() {
    }
    return CustomFunctionModule;
}());
CustomFunctionModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, routing, wijmo_angular2_grid_sheet_1.WjGridSheetModule],
        declarations: [CustomFunctionCmp],
    })
], CustomFunctionModule);
exports.CustomFunctionModule = CustomFunctionModule;
//# sourceMappingURL=CustomFunctionCmp.js.map