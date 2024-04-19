import { Component, computed } from "@angular/core";
import { SignalsService } from "src/app/domain/services/signals.service";

@Component({
    selector: "app-signals-child",
    templateUrl: "./signals-child.component.html",
    styleUrl: "./signals-child.component.css",
})
export class SignalsChildComponent {
    constructor(private service: SignalsService) {}
}
