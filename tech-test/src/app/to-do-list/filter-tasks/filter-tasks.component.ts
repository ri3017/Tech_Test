import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-filter-tasks",
  templateUrl: "./filter-tasks.component.html",
  styleUrls: ["./filter-tasks.component.scss"],
})
export class FilterTasksComponent implements OnInit {
  @Output() filteredAll: EventEmitter<any> = new EventEmitter();
  @Output() filteredRemaining: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  filtering() {
    this.filteredAll.emit();
  }

  filteringRemained() {
    this.filteredRemaining.emit();
  }
}
