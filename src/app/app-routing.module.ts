import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignalsComponent } from "./signals/signals.component";
import { AnimationsComponent } from "./animations/animations.component";
import { HomeComponent } from "./home/home.component";
import { FormsComponent } from "./forms/forms.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "signals",
                component: SignalsComponent,
            },
            {
                path: "animations",
                component: AnimationsComponent,
            },
            {
                path: "forms",
                component: FormsComponent,
            },
            {
                path: "**",
                redirectTo: "signals",
            },
        ],
    },
    {
        path: "**",
        redirectTo: "",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
