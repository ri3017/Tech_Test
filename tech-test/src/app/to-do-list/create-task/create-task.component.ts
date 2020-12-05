import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-create-task",
  templateUrl: "./create-task.component.html",
  styleUrls: ["./create-task.component.scss"],
})
export class CreateTaskComponent implements OnInit {
  toDoForm: FormGroup;
  @Output() submittedTask: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.toDoForm = this.formBuilder.group({
      description: ["", [Validators.required, Validators.maxLength(25)]],
      label: ["", [Validators.required, Validators.maxLength(25)]],
      category: ["", [Validators.required, Validators.maxLength(25)]],
    });
  }

  submitForm() {
    if (this.toDoForm.valid) {
      let values = this.toDoForm.value;
      values.done = false;
      values.completedDate = null;
      this.submittedTask.emit(values);
    }
  }
}
