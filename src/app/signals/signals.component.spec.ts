import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SignalsComponent } from "./signals.component";
import { beforeEach, it } from "node:test";
import { FormBuilder } from "@angular/forms";

describe("SignalsComponent", () => {
    let component: SignalsComponent;
    let fixture: ComponentFixture<SignalsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SignalsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SignalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("returnValue() should return input string", () => {
        expect(component.returnValue("example")).toEqual("example");
    });

    it("addOne() should add 1 to a value", () => {
        expect(component.addOne(3)).toBe(3);
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
