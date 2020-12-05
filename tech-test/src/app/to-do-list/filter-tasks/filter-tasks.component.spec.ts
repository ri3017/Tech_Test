import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FilterTasksComponent } from "./filter-tasks.component";

import { MatButtonToggleModule } from "@angular/material";

describe("FilterTasksComponent", () => {
  let component: FilterTasksComponent;
  let fixture: ComponentFixture<FilterTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTasksComponent],
      imports: [MatButtonToggleModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
