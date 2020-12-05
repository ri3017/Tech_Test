import { Component, OnInit } from "@angular/core";
import { Task } from "../task";
import { ToDoService } from "../to-do.service";

@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.scss"],
})
export class ToDoListComponent implements OnInit {
  tasks: Task[];
  filtered: boolean;

  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.toDoService.get().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  addItem(values) {
    this.toDoService.post(values).subscribe((res) => {
      const newTask: Task = {
        description: values.description,
        done: values.done,
        id: this.tasks.length + 1,
        label: values.label,
        category: values.category,
        completedDate: values.completedDate,
      };
      this.tasks.push(newTask);
    });
  }

  removeTask(task) {
    this.toDoService.delete(task.id).subscribe((response) => {
      this.tasks = this.tasks.filter((taskItem) => task.id !== taskItem.id);
    });
  }

  updateStatus(task) {
    let currDate = new Date();
    const completed = {
      description: task.description,
      done: task.done,
      completedDate: task.done == false ? null : currDate.toString(),
      id: task.id,
    };

    this.toDoService.patch(task.id, completed).subscribe((response) => {
      let currDate = new Date();
      let index = this.tasks.indexOf(task);
      this.tasks[index].done = task.done;
      this.tasks[index].completedDate =
        task.done == false ? null : currDate.toString();
    });
  }

  filterAll() {
    this.ngOnInit();
  }

  filterRemained() {
    this.tasks = this.tasks.filter((task) => task.done == false);
  }
}
