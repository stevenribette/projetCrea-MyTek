"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var db_service_1 = require("../shared/db.service");
require("nativescript-localstorage");
var UserComponent = /** @class */ (function () {
    function UserComponent(router, routerExtensions, db) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.db = db;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = parseInt(localStorage.getItem('use_id'));
        this.pseudo = "Steven";
        this.img = "http://bloper97.fr/r/bloper97/img/profile.png";
        this.share = true;
        this.userData = { "pseudo": this.pseudo, "img": this.img, "share": this.share };
        this.db.getUser(this.id).subscribe(function (data) {
            _this.userData = data.json();
            _this.pseudo = _this.userData.use_name;
            _this.img = _this.userData.use_img;
            _this.share = _this.userData.use_share;
        });
    };
    UserComponent.prototype.editData = function () {
        if (this.userData.use_name != this.pseudo) {
            this.db.setUserName(this.id, this.pseudo).subscribe(function (data) {
                alert("Pseudo change");
            });
        }
        if (this.userData.use_img != this.img) {
            this.db.setUserImg(this.id, this.img).subscribe(function (data) {
                alert("Image change");
            });
        }
        if (this.userData.use_share != this.share) {
            this.db.setUserShare(this.id, this.share).subscribe(function (data) {
                alert("Mediatek visibility change");
            });
        }
    };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-user',
            providers: [db_service_1.DbService],
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions, db_service_1.DbService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFDekMsc0RBQStEO0FBQy9ELG1EQUFpRDtBQUVqRCxPQUFPLENBQUUsMkJBQTJCLENBQUUsQ0FBQztBQVN2QztJQVFFLHVCQUFvQixNQUFjLEVBQVUsZ0JBQWtDLEVBQVUsRUFBYTtRQUFqRixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBSSxDQUFDO0lBRTFHLGdDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLCtDQUErQyxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBR25GLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3JDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDckMsS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNqQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO2dCQUN0RCxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7WUFDcEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDbEQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQ3RELEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUExQ1UsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDLHNCQUFTLENBQUM7WUFDdEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQVM0QixlQUFNLEVBQTRCLHlCQUFnQixFQUFjLHNCQUFTO09BUjFGLGFBQWEsQ0EyQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEYlNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZGIuc2VydmljZSc7XG5cbnJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC11c2VyJyxcbiAgcHJvdmlkZXJzOiBbRGJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91c2VyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXNlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaWQ6IE51bWJlcjtcbiAgcHNldWRvOiBzdHJpbmc7XG4gIGltZzogc3RyaW5nO1xuICBzaGFyZTogYm9vbGVhbjtcbiAgdXNlckRhdGE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGRiOiBEYlNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaWQgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlX2lkJykpO1xuICAgIFxuICAgIHRoaXMucHNldWRvID0gXCJTdGV2ZW5cIjtcbiAgICB0aGlzLmltZyA9IFwiaHR0cDovL2Jsb3Blcjk3LmZyL3IvYmxvcGVyOTcvaW1nL3Byb2ZpbGUucG5nXCI7XG4gICAgdGhpcy5zaGFyZSA9IHRydWU7XG4gICAgdGhpcy51c2VyRGF0YSA9IHsgXCJwc2V1ZG9cIiA6IHRoaXMucHNldWRvLCBcImltZ1wiIDogdGhpcy5pbWcsIFwic2hhcmVcIiA6IHRoaXMuc2hhcmUgfTtcblxuICAgIFxuICAgIHRoaXMuZGIuZ2V0VXNlcih0aGlzLmlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLnVzZXJEYXRhID0gZGF0YS5qc29uKCk7XG4gICAgICB0aGlzLnBzZXVkbyA9IHRoaXMudXNlckRhdGEudXNlX25hbWU7XG4gICAgICB0aGlzLmltZyA9IHRoaXMudXNlckRhdGEudXNlX2ltZztcbiAgICAgIHRoaXMuc2hhcmUgPSB0aGlzLnVzZXJEYXRhLnVzZV9zaGFyZTtcbiAgICB9KTtcbiAgfVxuICBlZGl0RGF0YSgpe1xuICAgIGlmKHRoaXMudXNlckRhdGEudXNlX25hbWUgIT0gdGhpcy5wc2V1ZG8pe1xuICAgICAgdGhpcy5kYi5zZXRVc2VyTmFtZSh0aGlzLmlkLCB0aGlzLnBzZXVkbykuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICBhbGVydChcIlBzZXVkbyBjaGFuZ2VcIik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYodGhpcy51c2VyRGF0YS51c2VfaW1nICE9IHRoaXMuaW1nKXtcbiAgICAgIHRoaXMuZGIuc2V0VXNlckltZyh0aGlzLmlkLCB0aGlzLmltZykuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICBhbGVydChcIkltYWdlIGNoYW5nZVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZih0aGlzLnVzZXJEYXRhLnVzZV9zaGFyZSAhPSB0aGlzLnNoYXJlKXtcbiAgICAgIHRoaXMuZGIuc2V0VXNlclNoYXJlKHRoaXMuaWQsIHRoaXMuc2hhcmUpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgYWxlcnQoXCJNZWRpYXRlayB2aXNpYmlsaXR5IGNoYW5nZVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19