import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FormsComponent } from "./forms/forms.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SignalsComponent } from "./signals/signals.component";
import { AnimationsComponent } from "./animations/animations.component";
import { MatInputModule } from "@angular/material/input";

@NgModule({
    declarations: [
        AppComponent,
        AnimationsComponent,
        HomeComponent,
        FormsComponent,
        SignalsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatInputModule,
        FormsModule,
    ],
    providers: [MatIconRegistry],
    bootstrap: [AppComponent],
})
export class AppModule {}
