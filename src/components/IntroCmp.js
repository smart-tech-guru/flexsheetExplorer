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
'use strict';
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var wijmo_angular2_grid_sheet_1 = require("wijmo/wijmo.angular2.grid.sheet");
var contextmenu_component_1 = require("./newComponent/contextmenu/contextmenu.component");
var IntroCmp = (function () {
    function IntroCmp(resolver) {
        this.resolver = resolver;
        this.prev_selection = {
            _row: 0,
            _row2: 0,
            _col: 0,
            _col2: 0
        };
    }
    IntroCmp.prototype.flexSheetInit = function (flexSheet) {
        var _this = this;
        if (flexSheet) {
            flexSheet.selectedSheetIndex = 0;
        }
        flexSheet.prepareCellForEdit.addHandler(function () {
            _this.prev_selection = flexSheet.selection;
            var top = flexSheet.selection._row * 28 + 65 + flexSheet.scrollPosition.y;
            var left = flexSheet.selection._col * 112 + 25 + flexSheet.scrollPosition.x;
            _this.createComponent(top, left);
        });
        flexSheet.selectionChanged.addHandler(function () {
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
    IntroCmp.prototype.createComponent = function (top, left) {
        var _this = this;
        console.log('here');
        var factory = this.resolver.resolveComponentFactory(contextmenu_component_1.ContextMenuComponent);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.top = top;
        this.componentRef.instance.left = left;
        this.componentRef.instance.result.subscribe(function () { return _this.removeComponent(); });
    };
    IntroCmp.prototype.removeComponent = function () {
        this.container.clear();
    };
    return IntroCmp;
}());
__decorate([
    core_1.ViewChild('flexSheet'),
    __metadata("design:type", wjcGridSheet.FlexSheet)
], IntroCmp.prototype, "flexSheet", void 0);
__decorate([
    core_1.ViewChild('dynamicContextMenuContainer', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], IntroCmp.prototype, "container", void 0);
IntroCmp = __decorate([
    core_1.Component({
        selector: 'intro-cmp',
        templateUrl: 'src/components/introCmp.html',
        entryComponents: [contextmenu_component_1.ContextMenuComponent],
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
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
        imports: [common_1.CommonModule, routing, wijmo_angular2_grid_sheet_1.WjGridSheetModule],
        declarations: [IntroCmp, contextmenu_component_1.ContextMenuComponent],
    })
], IntroModule);
exports.IntroModule = IntroModule;
//# sourceMappingURL=IntroCmp.js.map