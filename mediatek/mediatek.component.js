"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var db_service_1 = require("../shared/db.service");
var MediatekComponent = /** @class */ (function () {
    function MediatekComponent(router, routerExtensions, db) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.db = db;
        this.fiches = [];
        this.searchs = [];
    }
    MediatekComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = parseInt(localStorage.getItem('use_id'));
        //this.fiches = [{ "fic_id": 1, "fic_name": "JURASSIC PARK", "fic_img": "~/images/jurassic-park.jpg" }, { "fic_id": 2, "fic_name": "GODZILLA", "fic_img": "~/images/godzilla.jpg" }];
        this.db.getUser(this.user).subscribe(function (data) {
            _this.id = data.mediatek_id;
            _this.db.getMediatekFiches(_this.id).subscribe(function (data) {
                _this.fiches = data.json();
            });
        });
    };
    MediatekComponent.prototype.goTo = function (id) {
        this.router.navigate(["app/fiche/", id]);
    };
    MediatekComponent.prototype.doSearch = function () {
        var _this = this;
        if (this.search != null) {
            this.db.omdbSearch(this.search).subscribe(function (data) {
                _this.searchs = data.json().search;
            });
        }
    };
    MediatekComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-mediatek',
            providers: [db_service_1.DbService],
            templateUrl: './mediatek.component.html',
            styleUrls: ['./mediatek.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions, db_service_1.DbService])
    ], MediatekComponent);
    return MediatekComponent;
}());
exports.MediatekComponent = MediatekComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWF0ZWsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVkaWF0ZWsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxzREFBK0Q7QUFDL0QsbURBQWlEO0FBU2pEO0lBU0UsMkJBQW9CLE1BQWMsRUFBVSxnQkFBa0MsRUFBVSxFQUFhO1FBQWpGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUpyRyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUU0RixDQUFDO0lBRTFHLG9DQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyRCxxTEFBcUw7UUFFckwsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDdkMsS0FBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQy9DLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBQ0QsZ0NBQUksR0FBSixVQUFLLEVBQUU7UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxvQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQzVDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBaENVLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLHNCQUFTLENBQUM7WUFDdEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDO3lDQVU0QixlQUFNLEVBQTRCLHlCQUFnQixFQUFjLHNCQUFTO09BVDFGLGlCQUFpQixDQWtDN0I7SUFBRCx3QkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEYlNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZGIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1tZWRpYXRlaycsXG4gIHByb3ZpZGVyczogW0RiU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9tZWRpYXRlay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lZGlhdGVrLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWVkaWF0ZWtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGlkOiBOdW1iZXI7XG4gIHVzZXI6IE51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBmaWNoZXMgPSBbXTtcbiAgc2VhcmNoOiBTdHJpbmc7XG4gIHNlYXJjaHMgPSBbXTtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBkYjogRGJTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVzZXIgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlX2lkJykpO1xuICAgIC8vdGhpcy5maWNoZXMgPSBbeyBcImZpY19pZFwiOiAxLCBcImZpY19uYW1lXCI6IFwiSlVSQVNTSUMgUEFSS1wiLCBcImZpY19pbWdcIjogXCJ+L2ltYWdlcy9qdXJhc3NpYy1wYXJrLmpwZ1wiIH0sIHsgXCJmaWNfaWRcIjogMiwgXCJmaWNfbmFtZVwiOiBcIkdPRFpJTExBXCIsIFwiZmljX2ltZ1wiOiBcIn4vaW1hZ2VzL2dvZHppbGxhLmpwZ1wiIH1dO1xuICAgIFxuICAgIHRoaXMuZGIuZ2V0VXNlcih0aGlzLnVzZXIpLnN1YnNjcmliZShkYXRhID0+e1xuICAgICAgdGhpcy5pZCA9IGRhdGEubWVkaWF0ZWtfaWQ7XG4gICAgICB0aGlzLmRiLmdldE1lZGlhdGVrRmljaGVzKHRoaXMuaWQpLnN1YnNjcmliZShkYXRhID0+e1xuICAgICAgICB0aGlzLmZpY2hlcyA9IGRhdGEuanNvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG4gIH1cbiAgZ29UbyhpZCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYXBwL2ZpY2hlL1wiLCBpZF0pO1xuICB9XG4gIGRvU2VhcmNoKCl7XG4gICAgaWYodGhpcy5zZWFyY2ggIT0gbnVsbCl7XG4gICAgICB0aGlzLmRiLm9tZGJTZWFyY2godGhpcy5zZWFyY2gpLnN1YnNjcmliZShkYXRhID0+e1xuICAgICAgICB0aGlzLnNlYXJjaHMgPSBkYXRhLmpzb24oKS5zZWFyY2g7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19