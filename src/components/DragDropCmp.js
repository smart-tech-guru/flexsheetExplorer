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
var DragDropCmp = (function () {
    function DragDropCmp() {
    }
    DragDropCmp.prototype.flexSheetInit = function (flexSheet) {
        var self = this;
        if (flexSheet) {
            flexSheet.deferUpdate(function () {
                var colIdx, rowIdx;
                for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
                        flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
                flexSheet.applyCellsStyle({ fontWeight: 'bold' }, [new wjcGrid.CellRange(0, 0, 9, 0),
                    new wjcGrid.CellRange(10, 1, 19, 1)]);
                flexSheet.applyCellsStyle({ textDecoration: 'underline' }, [new wjcGrid.CellRange(0, 2, 9, 2),
                    new wjcGrid.CellRange(10, 3, 19, 3)]);
                flexSheet.applyCellsStyle({ fontStyle: 'italic' }, [new wjcGrid.CellRange(0, 4, 9, 4),
                    new wjcGrid.CellRange(10, 5, 19, 5)]);
                flexSheet.applyCellsStyle({ format: 'c2' }, [new wjcGrid.CellRange(0, 0, 9, 7)]);
                flexSheet.applyCellsStyle({ backgroundColor: '#4488CC' }, [new wjcGrid.CellRange(0, 0, 19, 0),
                    new wjcGrid.CellRange(0, 2, 19, 2), new wjcGrid.CellRange(0, 4, 19, 4)]);
                flexSheet.applyCellsStyle({ color: '#CC8844' }, [new wjcGrid.CellRange(0, 1, 19, 1),
                    new wjcGrid.CellRange(0, 3, 19, 3), new wjcGrid.CellRange(0, 5, 19, 5)]);
                flexSheet.applyCellsStyle({ color: '#336699' }, [new wjcGrid.CellRange(0, 6, 9, 7)]);
                flexSheet.applyCellsStyle({ backgroundColor: '#996633' }, [new wjcGrid.CellRange(10, 6, 19, 7)]);
            });
        }
    };
    return DragDropCmp;
}());
__decorate([
    core_1.ViewChild('flexSheet'),
    __metadata("design:type", wjcGridSheet.FlexSheet)
], DragDropCmp.prototype, "flexSheet", void 0);
DragDropCmp = __decorate([
    core_1.Component({
        selector: 'drag-drop-cmp',
        templateUrl: 'src/components/dragDropCmp.html',
    })
], DragDropCmp);
exports.DragDropCmp = DragDropCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: DragDropCmp }
]);
var DragDropModule = (function () {
    function DragDropModule() {
    }
    return DragDropModule;
}());
DragDropModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, routing, wijmo_angular2_grid_sheet_1.WjGridSheetModule],
        declarations: [DragDropCmp],
    })
], DragDropModule);
exports.DragDropModule = DragDropModule;
//# sourceMappingURL=DragDropCmp.js.map