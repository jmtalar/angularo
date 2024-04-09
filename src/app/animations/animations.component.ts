import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from "@angular/animations";

@Component({
    selector: "app-animations",
    templateUrl: "./animations.component.html",
    styleUrl: "./animations.component.css",
    animations: [
        trigger("openClose", [
            state(
                "open",
                style({
                    height: "200px",
                    opacity: 1,
                    backgroundColor: "yellow",
                }),
            ),
            state(
                "closed",
                style({
                    height: "100px",
                    opacity: 0.8,
                    backgroundColor: "blue",
                }),
            ),
            transition("open => closed", [animate("1s")]),
            transition("closed => open", [animate("0.5s")]),
        ]),
    ],
})
export class AnimationsComponent {
    isOpen = false;

    toggleState() {
        this.isOpen = !this.isOpen;
    }
}
