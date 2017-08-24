"use strict";
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
var wjcGridSheet = require("wijmo/wijmo.grid.sheet");
'use strict';
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var wijmo_angular2_grid_sheet_1 = require("wijmo/wijmo.angular2.grid.sheet");
var contextmenu_component_1 = require("./newComponent/contextmenu/contextmenu.component");
var forms_1 = require("@angular/forms");
var DataSvc_1 = require("../services/DataSvc");
var BindingFlexSheetBaseCmp_1 = require("./BindingFlexSheetBaseCmp");
var IntroCmp = (function (_super) {
    __extends(IntroCmp, _super);
    function IntroCmp(dataSvc, resolver) {
        var _this = _super.call(this, dataSvc) || this;
        _this.resolver = resolver;
        _this.prev_selection = {
            _row: 0,
            _row2: 0,
            _col: 0,
            _col2: 0
        };
        return _this;
    }
    IntroCmp.prototype.flexSheetInit = function (flexSheet) {
        var _this = this;
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
        var columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        console.log(this.sumElement.nativeElement.innerHTML);
        flexSheet.prepareCellForEdit.addHandler(function (event) {
            console.log(event);
            _this.prev_selection = flexSheet.selection;
            var cell_width = flexSheet.getCellBoundingRect(0, 0).width;
            var cell_height = flexSheet.getCellBoundingRect(0, 0).height;
            var top = flexSheet.selection._row * cell_height + 2.3 * cell_height + flexSheet.scrollPosition.y;
            var left = flexSheet.selection._col * cell_width + 25 + flexSheet.scrollPosition.x;
            _this.createComponent(top, left, cell_width + 20);
        });
        flexSheet.selectionChanged.addHandler(function () {
            console.log(flexSheet.selection);
            var selection = flexSheet.selection;
            //"=sum(B2:D4)"
            if (selection._col < 0 || selection._col2 < 0 || selection._row < 0 || selection._row2 < 0)
                return;
            var query = '=sum(' + columns[selection._col2] + (selection._row2 + 1) + ':' + columns[selection._col] + (selection._row + 1) + ')';
            var firstRowColValue = flexSheet.getCellValue(selection._row2, selection._col2, true);
            var firstRowColData = flexSheet.getCellData(selection._row2, selection._col2, true);
            console.log(firstRowColValue);
            flexSheet.setCellData(selection._row2, selection._col2, query);
            console.log(flexSheet.getCellValue(selection._row2, selection._col2, true));
            var val = parseInt(flexSheet.getCellValue(selection._row2, selection._col2, true)) + parseInt(firstRowColValue);
            flexSheet.setCellData(selection._row2, selection._col2, firstRowColData);
            if (isNaN(val))
                val = 0;
            console.log('val', val);
            _this.sumElement.nativeElement.innerHTML = val;
            if (!(_this.prev_selection._row + 1 === flexSheet.selection._row && _this.prev_selection._col === flexSheet.selection._col)) {
                _this.container.clear();
            }
        });
        flexSheet.scrollPositionChanged.addHandler(function () {
            _this.container.clear();
        });
        flexSheet.columnHeaders.columns.collectionChanged.addHandler(function () {
            console.log('col changed');
        });
    };
    IntroCmp.prototype.createComponent = function (top, left, width) {
        var _this = this;
        console.log('here');
        var factory = this.resolver.resolveComponentFactory(contextmenu_component_1.ContextMenuComponent);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.top = top;
        this.componentRef.instance.left = left;
        this.componentRef.instance.width = width;
        this.componentRef.instance.result.subscribe(function () { return _this.removeComponent(); });
    };
    IntroCmp.prototype.removeComponent = function () {
        this.container.clear();
    };
    IntroCmp.prototype.load = function () {
        var flexSheet = this.flexSheet, fileInput = document.getElementById('importFile');
        if (flexSheet && fileInput.files[0]) {
            flexSheet.load(fileInput.files[0]);
        }
    };
    IntroCmp.prototype.save = function () {
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
    return IntroCmp;
}(BindingFlexSheetBaseCmp_1.BindingFlexSheetBaseCmp));
__decorate([
    core_1.ViewChild('flexSheet'),
    __metadata("design:type", wjcGridSheet.FlexSheet)
], IntroCmp.prototype, "flexSheet", void 0);
__decorate([
    core_1.ViewChild('dynamicContextMenuContainer', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], IntroCmp.prototype, "container", void 0);
__decorate([
    core_1.ViewChild('sum'),
    __metadata("design:type", core_1.ElementRef)
], IntroCmp.prototype, "sumElement", void 0);
IntroCmp = __decorate([
    core_1.Component({
        selector: 'intro-cmp',
        templateUrl: 'src/components/introCmp.html',
        entryComponents: [contextmenu_component_1.ContextMenuComponent],
    }),
    __param(0, core_1.Inject(DataSvc_1.DataSvc)),
    __metadata("design:paramtypes", [DataSvc_1.DataSvc, core_1.ComponentFactoryResolver])
], IntroCmp);
exports.IntroCmp = IntroCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: IntroCmp }
]);
var IntroModule = (function () {
    function IntroModule() {
    }
    return IntroModule;
}());
IntroModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_grid_sheet_1.WjGridSheetModule],
        declarations: [IntroCmp, contextmenu_component_1.ContextMenuComponent],
    })
], IntroModule);
exports.IntroModule = IntroModule;
//# sourceMappingURL=IntroCmp.js.map