import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CataloguePage } from "./pages/catalogue/catalogue.page";
import { LoginPage } from "./pages/login/login.page";
import { ProfilePage } from "./pages/profile/profile.page";

const routes: Routes = [
    {
        path: "",
        component: LoginPage
    },
    {
        path: "catalogue",
        component: CataloguePage
    },
    {
        path: "trainer",
        component: ProfilePage
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