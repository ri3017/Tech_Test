import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateTaskComponent } from "./create-task.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
} from "@angular/material";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { Task } from "../task";

describe("CreateTaskComponent", () => {
  let component: CreateTaskComponent;
  let fixture: ComponentFixture<CreateTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTaskComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should be invalid when empty", () => {
    expect(component.toDoForm.valid).toBeFalsy();
  });

  it("description field must be required", () => {
    let errors = {};
    let description = component.toDoForm.controls["description"];
    errors = description.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it("submitting a form emits a task", () => {
    expect(component.toDoForm.valid).toBeFalsy();
    component.toDoForm.controls["description"].setValue("Clean House");
    component.toDoForm.controls["label"].setValue("Cleaning");
    component.toDoForm.controls["category"].setValue("House");
    expect(component.toDoForm.valid).toBeTruthy();

    let task: Task;
    component.submittedTask.subscribe((value) => (task = value));
    component.submitForm();
    expect(task.description).toBe("Clean House");
    expect(task.label).toBe("Cleaning");
  });
});
