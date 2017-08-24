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
    }
    ContextMenuComponent.prototype.ngOnInit = function () {
        console.log('Component Menu Created!');
    };
    return ContextMenuComponent;
}());
__decorate([
    core_1.ViewChild('dynamicComponentContainer', {
        read: core_1.ViewContainerRef
    }),
    __metadata("design:type", core_1.ViewContainerRef)
], ContextMenuComponent.prototype, "container", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ContextMenuComponent.prototype, "isEdit", void 0);
ContextMenuComponent = __decorate([
    core_1.Component({
        templateUrl: './dynamickanbanboard.component.html',
        styleUrls: ['./dynamickanbanboard.component.scss'],
        encapsulation: core_1.ViewEncapsulation.None,
        providers: []
    })
], ContextMenuComponent);
exports.ContextMenuComponent = ContextMenuComponent;
//# sourceMappingURL=contextmenu.js.map