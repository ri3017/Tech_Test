import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatCheckboxModule,
  MatButtonToggleModule,
} from "@angular/material";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FilterTasksComponent } from "./filter-tasks/filter-tasks.component";

@NgModule({
  declarations: [CreateTaskComponent, ToDoListComponent, FilterTasksComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    HttpClientModule,
  ],
  exports: [CreateTaskComponent, ToDoListComponent, FilterTasksComponent],
})
export class ToDoListModule {}
