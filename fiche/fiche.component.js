"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var db_service_1 = require("../shared/db.service");
var FicheComponent = /** @class */ (function () {
    function FicheComponent(router, routerExtensions, db, route) {
        var _this = this;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.db = db;
        this.route = route;
        this.notes = [];
        this.avis = [];
        this.route.params.forEach(function (params) { _this.id = +params["id"]; });
    }
    FicheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = parseInt(localStorage.getItem('use_id'));
        /*
        if(this.id==1){
          this.name= "JURASSIC PARK";
          this.img = "~/images/jurassic-park.jpg";
          this.url = "http://www.omdbapi.com/?t=jurassic+park";
          this.notes = [{"use_id":1, "not_value": 5}, {"use_id":2, "not_value": 3}];
          this.avis = [{"use_id":1, "avi_contenu": "Passionnant"}, {"use_id":2, "avi_contenu": "Bof, nostalgique mais sans plus"}];
          this.visionner = true;
        }else if(this.id==2){
          this.name= "GODZILLA";
          this.img = "~/images/godzilla.jpg";
          this.url = "http://www.omdbapi.com/?t=godzilla";
          this.notes = [{"use_id":1, "not_value": 2}, {"use_id":2, "not_value": 4}];
          this.avis = [{"use_id":1, "avi_contenu": "Frause le ridicule cinématographique"}, {"use_id":2, "avi_contenu": "Très bon moment malgré le fait que godzilla ressemble un peu trop à un dinosaure"}];
          this.visionner = true;
        }
        */
        this.db.getFiche(this.id).subscribe(function (data) {
            data = data.json();
            _this.name = data.fic_name;
            _this.img = data.fic_img;
            _this.url = data.fic_url;
        });
        /*
        this.db.getNotes(this.id).subscribe(data =>{
          this.notes = data.json();
        });
        this.db.getAvis(this.id).subscribe(data =>{
          this.avis = data.json();
        });
        this.db.getVisionner(this.user,this.id).subscribe(data =>{
          this.visionner = data.json().vis_statut;
        });
        */
    };
    FicheComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-fiche',
            providers: [db_service_1.DbService],
            templateUrl: './fiche.component.html',
            styleUrls: ['./fiche.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions, db_service_1.DbService, router_1.ActivatedRoute])
    ], FicheComponent);
    return FicheComponent;
}());
exports.FicheComponent = FicheComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmljaGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmljaGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsbURBQWlEO0FBU2pEO0lBV0Usd0JBQW9CLE1BQWMsRUFBVSxnQkFBa0MsRUFBVSxFQUFhLEVBQVUsS0FBcUI7UUFBcEksaUJBRUM7UUFGbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFKcEksVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBRyxFQUFFLENBQUM7UUFJUixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLElBQU0sS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBcUNDO1FBcENDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyRDs7Ozs7Ozs7Ozs7Ozs7OztVQWdCRTtRQUVGLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3RDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN4QixLQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSDs7Ozs7Ozs7OztVQVVFO0lBQ0osQ0FBQztJQXBEVSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLENBQUMsc0JBQVMsQ0FBQztZQUN0QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7eUNBWTRCLGVBQU0sRUFBNEIseUJBQWdCLEVBQWMsc0JBQVMsRUFBaUIsdUJBQWM7T0FYekgsY0FBYyxDQXdEMUI7SUFBRCxxQkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEYlNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZGIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1maWNoZScsXG4gIHByb3ZpZGVyczogW0RiU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9maWNoZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpY2hlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmljaGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHVzZXI6IE51bWJlcjtcbiAgaWQ6IE51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBpbWc6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIG5vdGVzID0gW107XG4gIGF2aXMgPSBbXTtcbiAgdmlzaW9ubmVyOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBkYjogRGJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIHRoaXMucm91dGUucGFyYW1zLmZvckVhY2goKHBhcmFtcykgPT4ge3RoaXMuaWQgPSArcGFyYW1zW1wiaWRcIl19KTsgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVzZXIgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlX2lkJykpO1xuICAgIC8qXG4gICAgaWYodGhpcy5pZD09MSl7XG4gICAgICB0aGlzLm5hbWU9IFwiSlVSQVNTSUMgUEFSS1wiOyBcbiAgICAgIHRoaXMuaW1nID0gXCJ+L2ltYWdlcy9qdXJhc3NpYy1wYXJrLmpwZ1wiO1xuICAgICAgdGhpcy51cmwgPSBcImh0dHA6Ly93d3cub21kYmFwaS5jb20vP3Q9anVyYXNzaWMrcGFya1wiO1xuICAgICAgdGhpcy5ub3RlcyA9IFt7XCJ1c2VfaWRcIjoxLCBcIm5vdF92YWx1ZVwiOiA1fSwge1widXNlX2lkXCI6MiwgXCJub3RfdmFsdWVcIjogM31dO1xuICAgICAgdGhpcy5hdmlzID0gW3tcInVzZV9pZFwiOjEsIFwiYXZpX2NvbnRlbnVcIjogXCJQYXNzaW9ubmFudFwifSwge1widXNlX2lkXCI6MiwgXCJhdmlfY29udGVudVwiOiBcIkJvZiwgbm9zdGFsZ2lxdWUgbWFpcyBzYW5zIHBsdXNcIn1dO1xuICAgICAgdGhpcy52aXNpb25uZXIgPSB0cnVlO1xuICAgIH1lbHNlIGlmKHRoaXMuaWQ9PTIpe1xuICAgICAgdGhpcy5uYW1lPSBcIkdPRFpJTExBXCI7IFxuICAgICAgdGhpcy5pbWcgPSBcIn4vaW1hZ2VzL2dvZHppbGxhLmpwZ1wiO1xuICAgICAgdGhpcy51cmwgPSBcImh0dHA6Ly93d3cub21kYmFwaS5jb20vP3Q9Z29kemlsbGFcIjtcbiAgICAgIHRoaXMubm90ZXMgPSBbe1widXNlX2lkXCI6MSwgXCJub3RfdmFsdWVcIjogMn0sIHtcInVzZV9pZFwiOjIsIFwibm90X3ZhbHVlXCI6IDR9XTtcbiAgICAgIHRoaXMuYXZpcyA9IFt7XCJ1c2VfaWRcIjoxLCBcImF2aV9jb250ZW51XCI6IFwiRnJhdXNlIGxlIHJpZGljdWxlIGNpbsOpbWF0b2dyYXBoaXF1ZVwifSwge1widXNlX2lkXCI6MiwgXCJhdmlfY29udGVudVwiOiBcIlRyw6hzIGJvbiBtb21lbnQgbWFsZ3LDqSBsZSBmYWl0IHF1ZSBnb2R6aWxsYSByZXNzZW1ibGUgdW4gcGV1IHRyb3Agw6AgdW4gZGlub3NhdXJlXCJ9XTtcbiAgICAgIHRoaXMudmlzaW9ubmVyID0gdHJ1ZTtcbiAgICB9XG4gICAgKi9cbiAgICBcbiAgICB0aGlzLmRiLmdldEZpY2hlKHRoaXMuaWQpLnN1YnNjcmliZShkYXRhID0+e1xuICAgICAgZGF0YSA9IGRhdGEuanNvbigpO1xuICAgICAgdGhpcy5uYW1lID0gZGF0YS5maWNfbmFtZTtcbiAgICAgIHRoaXMuaW1nID0gZGF0YS5maWNfaW1nO1xuICAgICAgdGhpcy51cmwgPSBkYXRhLmZpY191cmw7XG4gICAgfSk7XG4gICAgLypcbiAgICB0aGlzLmRiLmdldE5vdGVzKHRoaXMuaWQpLnN1YnNjcmliZShkYXRhID0+e1xuICAgICAgdGhpcy5ub3RlcyA9IGRhdGEuanNvbigpO1xuICAgIH0pO1xuICAgIHRoaXMuZGIuZ2V0QXZpcyh0aGlzLmlkKS5zdWJzY3JpYmUoZGF0YSA9PntcbiAgICAgIHRoaXMuYXZpcyA9IGRhdGEuanNvbigpO1xuICAgIH0pO1xuICAgIHRoaXMuZGIuZ2V0VmlzaW9ubmVyKHRoaXMudXNlcix0aGlzLmlkKS5zdWJzY3JpYmUoZGF0YSA9PntcbiAgICAgIHRoaXMudmlzaW9ubmVyID0gZGF0YS5qc29uKCkudmlzX3N0YXR1dDtcbiAgICB9KTtcbiAgICAqL1xuICB9XG5cblxuXG59XG4iXX0=