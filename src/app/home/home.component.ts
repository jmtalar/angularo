import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { Router } from "@angular/router";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
})
export class HomeComponent {
    constructor(
        private router: Router,
        private register: MatIconRegistry,
    ) {
        register.setDefaultFontSetClass("f1");
    }
    events: string[] = [];
    opened = false;

    list = [
        {
            text: "Signals",
            url: "/signals",
            isActive: true,
            icon: "share",
        },
        {
            text: "Animations",
            url: "/animations",
            isActive: false,
            icon: "menu",
        },
        {
            text: "Forms",
            url: "/forms",
            isActive: false,
            icon: "favourite",
        },
    ];
}
