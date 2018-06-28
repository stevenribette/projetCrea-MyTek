"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./login/login.component");
var menu_component_1 = require("./menu/menu.component");
var appli_component_1 = require("./appli/appli.component");
var user_component_1 = require("./user/user.component");
var mediatek_component_1 = require("./mediatek/mediatek.component");
var groupes_component_1 = require("./groupes/groupes.component");
var groupe_component_1 = require("./groupe/groupe.component");
var fiche_component_1 = require("./fiche/fiche.component");
exports.routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "app", component: appli_component_1.AppliComponent, children: [
            { path: "menu", component: menu_component_1.MenuComponent },
            { path: "user", component: user_component_1.UserComponent },
            { path: "mediatek", component: mediatek_component_1.MediatekComponent },
            { path: "groupes", component: groupes_component_1.GroupesComponent },
            { path: "groupe/:id", component: groupe_component_1.GroupeComponent },
            { path: "fiche/:id", component: fiche_component_1.FicheComponent }
        ] }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    appli_component_1.AppliComponent,
    user_component_1.UserComponent,
    menu_component_1.MenuComponent,
    mediatek_component_1.MediatekComponent,
    groupes_component_1.GroupesComponent,
    fiche_component_1.FicheComponent,
    groupe_component_1.GroupeComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUF5RDtBQUN6RCx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELHdEQUFzRDtBQUN0RCxvRUFBa0U7QUFDbEUsaUVBQStEO0FBQy9ELDhEQUE0RDtBQUM1RCwyREFBeUQ7QUFFNUMsUUFBQSxNQUFNLEdBQUc7SUFDcEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztJQUNuRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLFFBQVEsRUFBRTtZQUNsRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7WUFDMUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO1lBQzFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7WUFDbEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtZQUNoRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7WUFDbEQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO1NBQ2pELEVBQUM7Q0FDSCxDQUFDO0FBRVcsUUFBQSxxQkFBcUIsR0FBRztJQUNuQyxnQ0FBYztJQUNkLGdDQUFjO0lBQ2QsOEJBQWE7SUFDYiw4QkFBYTtJQUNiLHNDQUFpQjtJQUNqQixvQ0FBZ0I7SUFDaEIsZ0NBQWM7SUFDZCxrQ0FBZTtDQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL21lbnUvbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXBwbGlDb21wb25lbnQgfSBmcm9tIFwiLi9hcHBsaS9hcHBsaS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlckNvbXBvbmVudCB9IGZyb20gXCIuL3VzZXIvdXNlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVkaWF0ZWtDb21wb25lbnQgfSBmcm9tIFwiLi9tZWRpYXRlay9tZWRpYXRlay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JvdXBlc0NvbXBvbmVudCB9IGZyb20gXCIuL2dyb3VwZXMvZ3JvdXBlcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JvdXBlQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3JvdXBlL2dyb3VwZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmljaGVDb21wb25lbnQgfSBmcm9tIFwiLi9maWNoZS9maWNoZS5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcImxvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCJ9LFxyXG4gIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiBcImFwcFwiLCBjb21wb25lbnQ6IEFwcGxpQ29tcG9uZW50LCBjaGlsZHJlbjogW1xyXG4gICAgeyBwYXRoOiBcIm1lbnVcIiwgY29tcG9uZW50OiBNZW51Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwidXNlclwiLCBjb21wb25lbnQ6IFVzZXJDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJtZWRpYXRla1wiLCBjb21wb25lbnQ6IE1lZGlhdGVrQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiZ3JvdXBlc1wiLCBjb21wb25lbnQ6IEdyb3VwZXNDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJncm91cGUvOmlkXCIsIGNvbXBvbmVudDogR3JvdXBlQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiZmljaGUvOmlkXCIsIGNvbXBvbmVudDogRmljaGVDb21wb25lbnQgfVxyXG4gIF19XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xyXG4gIExvZ2luQ29tcG9uZW50LFxyXG4gIEFwcGxpQ29tcG9uZW50LFxyXG4gIFVzZXJDb21wb25lbnQsXHJcbiAgTWVudUNvbXBvbmVudCxcclxuICBNZWRpYXRla0NvbXBvbmVudCxcclxuICBHcm91cGVzQ29tcG9uZW50LFxyXG4gIEZpY2hlQ29tcG9uZW50LCBcclxuICBHcm91cGVDb21wb25lbnRcclxuXTsiXX0=