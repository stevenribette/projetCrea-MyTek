"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var db_service_1 = require("../shared/db.service");
require("nativescript-localstorage");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, routerExtensions, db) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.db = db;
        this.shared = false;
        this.isLoggingIn = true;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn == true) {
            this.connect();
        }
        else {
            this.subscribe();
        }
    };
    LoginComponent.prototype.connect = function () {
        var _this = this;
        this.db.checkUser(this.pseudo, this.password).subscribe(function (data) {
            var d = data.json();
            if (d.use_id != false) {
                localStorage.setItem('use_id', d.use_id);
                _this.router.navigate(["app/mediatek"]);
            }
        });
    };
    LoginComponent.prototype.subscribe = function () {
        var _this = this;
        if (this.checkSub() != false) {
            this.db.addUser(this.pseudo, this.password, this.shared).subscribe(function (data) {
                _this.routerExtensions.navigate(["login"]);
            });
        }
        else {
            alert("Infos incorrectes!!!");
        }
    };
    LoginComponent.prototype.checkSub = function () {
        if (this.pseudo.length > 0 && this.checkPass() == true) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginComponent.prototype.checkPass = function () {
        if (this.password.length > 4) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            providers: [db_service_1.DbService],
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions, db_service_1.DbService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxzREFBNkQ7QUFDN0QsbURBQWlEO0FBRWpELE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBU3ZDO0lBT0Usd0JBQW9CLE1BQWMsRUFBVSxnQkFBa0MsRUFBVSxFQUFhO1FBQWpGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUhyRyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxJQUFJLENBQUM7SUFFcUYsQ0FBQztJQUV6RyxpQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLCtCQUFNLEdBQU47UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO0lBQ0gsQ0FBQztJQUNELGdDQUFPLEdBQVA7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDekQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BCLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUEsQ0FBQztnQkFDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGtDQUFTLEdBQVQ7UUFBQSxpQkFRQztRQVBDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBRSxLQUFLLENBQUMsQ0FBQSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDcEUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUNELGlDQUFRLEdBQVI7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQUNELGtDQUFTLEdBQVQ7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFDRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQXBEVSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLENBQUMsc0JBQVMsQ0FBQztZQUN0QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7eUNBUTRCLGVBQU0sRUFBNEIseUJBQWdCLEVBQWMsc0JBQVM7T0FQMUYsY0FBYyxDQXFEMUI7SUFBRCxxQkFBQztDQUFBLEFBckRELElBcURDO0FBckRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRGJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9kYi5zZXJ2aWNlXCI7XG5cbnJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXG4gIHByb3ZpZGVyczogW0RiU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgcHNldWRvOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIHNoYXJlZCA9IGZhbHNlO1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGRiOiBEYlNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYodGhpcy5pc0xvZ2dpbmdJbj09dHJ1ZSl7XG4gICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIGNvbm5lY3QoKXtcbiAgICB0aGlzLmRiLmNoZWNrVXNlcih0aGlzLnBzZXVkbyx0aGlzLnBhc3N3b3JkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBsZXQgZCA9IGRhdGEuanNvbigpO1xuICAgICAgaWYoZC51c2VfaWQgIT0gZmFsc2Upe1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlX2lkJywgZC51c2VfaWQpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhcHAvbWVkaWF0ZWtcIl0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHN1YnNjcmliZSgpe1xuICAgIGlmKHRoaXMuY2hlY2tTdWIoKSE9ZmFsc2Upe1xuICAgICAgdGhpcy5kYi5hZGRVc2VyKHRoaXMucHNldWRvLHRoaXMucGFzc3dvcmQsIHRoaXMuc2hhcmVkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJsb2dpblwiXSk7XG4gICAgICB9KTtcbiAgICB9ZWxzZXtcbiAgICAgIGFsZXJ0KFwiSW5mb3MgaW5jb3JyZWN0ZXMhISFcIik7XG4gICAgfVxuICB9XG4gIGNoZWNrU3ViKCl7XG4gICAgaWYodGhpcy5wc2V1ZG8ubGVuZ3RoPjAgJiYgdGhpcy5jaGVja1Bhc3MoKT09dHJ1ZSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgY2hlY2tQYXNzKCl7XG4gICAgaWYodGhpcy5wYXNzd29yZC5sZW5ndGg+NCl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gIH1cbn1cbiJdfQ==