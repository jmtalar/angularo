import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
    selector: "app-forms",
    templateUrl: "./forms.component.html",
    styleUrl: "./forms.component.css",
})
export class FormsComponent {
    constructor(private fb: FormBuilder) {}

    form!: FormGroup;

    ngOnInit(): void {
        this.form = this.fb.group({
            Name: this.fb.control("czekolada"),
            Number: this.fb.control(345),
            Email: this.fb.control("janusz@wp.pl"),
        });
    }

    onSubmit(e: FormGroupDirective) {
        console.log(e.form.value);
    }

    returnValue(input: string) {
        return input;
    }

    addOne(value: number) {
        return value++;
    }

    onResetClick() {
        this.form.reset();
    }
}
