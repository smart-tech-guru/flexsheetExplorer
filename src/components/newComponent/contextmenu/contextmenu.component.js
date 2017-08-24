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
var core_1 = require("@angular/core");
var ContextMenuComponent = (function () {
    function ContextMenuComponent() {
        //@ViewChild('myKanbanboard') myKanbanboard: jqxKanbanComponent;
        this.result = new core_1.EventEmitter();
    }
    ContextMenuComponent.prototype.ngOnInit = function () {
        console.log('Component Menu Created!');
        console.log(this.top, this.left);
        var contextmenu = document.querySelector('.contextmenu-body');
    };
    ContextMenuComponent.prototype.cutBtnClicked = function () {
        console.log('cut button  clicked');
        this.result.emit();
    };
    ContextMenuComponent.prototype.copyBtnClicked = function () {
        console.log('copy button  clicked');
        this.result.emit();
    };
    ContextMenuComponent.prototype.pasteBtnClicked = function () {
        console.log('paste button  clicked');
        this.result.emit();
    };
    return ContextMenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ContextMenuComponent.prototype, "top", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ContextMenuComponent.prototype, "left", void 0);
__decorate([
    core_1.Output('destroyCheck'),
    __metadata("design:type", core_1.EventEmitter)
], ContextMenuComponent.prototype, "result", void 0);
ContextMenuComponent = __decorate([
    core_1.Component({
        templateUrl: 'src/components/newComponent/contextmenu/contextmenu.component.html',
        styleUrls: ['src/components/newComponent/contextmenu/contextmenu.component.css'],
        encapsulation: core_1.ViewEncapsulation.None,
        providers: []
    })
], ContextMenuComponent);
exports.ContextMenuComponent = ContextMenuComponent;
//# sourceMappingURL=contextmenu.component.js.map