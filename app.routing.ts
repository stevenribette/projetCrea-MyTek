import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./menu/menu.component";
import { AppliComponent } from "./appli/appli.component";
import { UserComponent } from "./user/user.component";
import { MediatekComponent } from "./mediatek/mediatek.component";
import { GroupesComponent } from "./groupes/groupes.component";
import { GroupeComponent } from "./groupe/groupe.component";
import { FicheComponent } from "./fiche/fiche.component";

export const routes = [
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path: "login", component: LoginComponent },
  { path: "app", component: AppliComponent, children: [
    { path: "menu", component: MenuComponent },
    { path: "user", component: UserComponent },
    { path: "mediatek", component: MediatekComponent },
    { path: "groupes", component: GroupesComponent },
    { path: "groupe/:id", component: GroupeComponent },
    { path: "fiche/:id", component: FicheComponent }
  ]}
];

export const navigatableComponents = [
  LoginComponent,
  AppliComponent,
  UserComponent,
  MenuComponent,
  MediatekComponent,
  GroupesComponent,
  FicheComponent, 
  GroupeComponent
];