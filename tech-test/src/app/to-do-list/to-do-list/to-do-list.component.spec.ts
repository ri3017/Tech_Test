import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import {
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
} from "@angular/material";

import { ToDoListComponent } from "./to-do-list.component";

import { CreateTaskComponent } from "../create-task/create-task.component";
import { FilterTasksComponent } from "../filter-tasks/filter-tasks.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ToDoService } from "../to-do.service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("ToDoListComponent", () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToDoListComponent,
        CreateTaskComponent,
        FilterTasksComponent,
      ],
      imports: [
        MatButtonToggleModule,
        MatListModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [ToDoService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
