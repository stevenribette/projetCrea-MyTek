"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var db_service_1 = require("../shared/db.service");
var GroupesComponent = /** @class */ (function () {
    function GroupesComponent(router, routerExtensions, db) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.db = db;
    }
    GroupesComponent.prototype.ngOnInit = function () { };
    GroupesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-groupes',
            providers: [db_service_1.DbService],
            templateUrl: './groupes.component.html',
            styleUrls: ['./groupes.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions, db_service_1.DbService])
    ], GroupesComponent);
    return GroupesComponent;
}());
exports.GroupesComponent = GroupesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFDekMsc0RBQStEO0FBQy9ELG1EQUFpRDtBQVNqRDtJQUVFLDBCQUFvQixNQUFjLEVBQVUsZ0JBQWtDLEVBQVUsRUFBYTtRQUFqRixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBSSxDQUFDO0lBRTFHLG1DQUFRLEdBQVIsY0FBYSxDQUFDO0lBSkgsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLENBQUMsc0JBQVMsQ0FBQztZQUN0QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBRzRCLGVBQU0sRUFBNEIseUJBQWdCLEVBQWMsc0JBQVM7T0FGMUYsZ0JBQWdCLENBTTVCO0lBQUQsdUJBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2RiLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZ3JvdXBlcycsXG4gIHByb3ZpZGVyczogW0RiU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9ncm91cGVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3JvdXBlcy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBkYjogRGJTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG59XG4iXX0=