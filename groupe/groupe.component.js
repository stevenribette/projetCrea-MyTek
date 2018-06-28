"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var db_service_1 = require("../shared/db.service");
var GroupeComponent = /** @class */ (function () {
    function GroupeComponent(router, routerExtensions, db, route) {
        var _this = this;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.db = db;
        this.route = route;
        this.gro_id = null;
        this.route.params
            .forEach(function (params) { _this.gro_id = +params["gro_id"]; });
    }
    GroupeComponent.prototype.ngOnInit = function () {
    };
    GroupeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-groupe',
            templateUrl: './groupe.component.html',
            styleUrls: ['./groupe.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions, db_service_1.DbService, router_1.ActivatedRoute])
    ], GroupeComponent);
    return GroupeComponent;
}());
exports.GroupeComponent = GroupeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyb3VwZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCxtREFBaUQ7QUFRakQ7SUFJRSx5QkFBb0IsTUFBYyxFQUFVLGdCQUFrQyxFQUFVLEVBQWEsRUFBVSxLQUFxQjtRQUFwSSxpQkFHQztRQUhtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUZwSSxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBR1osSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFNLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUVBLENBQUM7SUFYVSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN2QyxDQUFDO3lDQUs0QixlQUFNLEVBQTRCLHlCQUFnQixFQUFjLHNCQUFTLEVBQWlCLHVCQUFjO09BSnpILGVBQWUsQ0FZM0I7SUFBRCxzQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEYlNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZGIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1ncm91cGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JvdXBlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3JvdXBlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBncm9faWQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBkYjogRGJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7dGhpcy5ncm9faWQgPSArcGFyYW1zW1wiZ3JvX2lkXCJdfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG59Il19