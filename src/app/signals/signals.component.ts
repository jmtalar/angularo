import { Component, signal } from "@angular/core";

@Component({
    selector: "app-signals",
    templateUrl: "./signals.component.html",
    styleUrl: "./signals.component.css",
})
export class SignalsComponent {
    count = signal(0);
    infoText = `Signal value is: ${this.count()}`;

    addOne() {
        this.count.update((value) => value + 1);
        this.updateInfo();
    }

    substractOne() {
        this.count.update((value) => value - 1);
        this.updateInfo();
    }

    updateInfo() {
        this.infoText = `Signal value is: ${this.count()}`;
    }
}
