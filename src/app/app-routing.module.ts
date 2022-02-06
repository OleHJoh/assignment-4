import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizationGuard } from "./guards/authorization.guard";
import { CataloguePage } from "./pages/catalogue/catalogue.page";
import { LoginPage } from "./pages/login/login.page";
import { ProfilePage } from "./pages/profile/profile.page";

const routes: Routes = [
    {
        path: "",
        component: LoginPage,
        pathMatch: "full"
    },
    {
        path: "catalogue",
        component: CataloguePage,
        canActivate: [ AuthorizationGuard ]
    },
    {
        path: "trainer",
        component: ProfilePage,
        canActivate: [ AuthorizationGuard ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}