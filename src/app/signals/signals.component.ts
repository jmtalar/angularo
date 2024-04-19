import { Component, computed, signal, effect } from "@angular/core";
import { SignalsService } from "../domain/services/signals.service";

@Component({
    selector: "app-signals",
    templateUrl: "./signals.component.html",
    styleUrl: "./signals.component.css",
})
export class SignalsComponent {
    constructor(private service: SignalsService) {
        effect(() => {
            this.infoText = `Signal value is: ${this.signalSum()}`;
            this.infoComputedText = `Computed signal value is: ${this.signalSumComputed()}`;
        });
    }

    signalSum = signal(0);
    signalSumComputed = computed(() => {
        return this.signalSum() * 10;
    });

    infoText = ``;
    infoComputedText = ``;

    addOne() {
        this.signalSum.update((value) => value + 1);
    }

    substractOne() {
        this.signalSum.update((value) => value - 1);
    }
}
