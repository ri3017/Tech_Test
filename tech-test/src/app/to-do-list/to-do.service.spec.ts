import { TestBed } from "@angular/core/testing";

import { ToDoService } from "./to-do.service";

import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { Task } from "./task";

describe("ToDoService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ToDoService],
    })
  );

  it("should be created", () => {
    const service: ToDoService = TestBed.get(ToDoService);
    expect(service).toBeTruthy();
  });

  it("should have get function", () => {
    const service: ToDoService = TestBed.get(ToDoService);
    expect(service.get).toBeTruthy();
  });

  it("should retrieve tasks using GET request", () => {
    let service: ToDoService = TestBed.get(ToDoService);
    let serverMock: HttpTestingController = TestBed.get(HttpTestingController);
    const dummyTasks: Task[] = [
      {
        id: 1,
        description: "Cleaning",
        category: "House",
      },
      {
        id: 2,
        description: "Meeting",
        category: "Office",
      },
    ];
    service.get().subscribe((tasks) => {
      expect(tasks.length).toBe(2);
      expect(tasks).toEqual(dummyTasks);
    });
    let mockRequest = serverMock.expectOne(service.SERVER_URL);
    expect(mockRequest.cancelled).toBeFalsy();
    expect(mockRequest.request.method).toBe("GET");
    expect(mockRequest.request.responseType).toEqual("json");
    mockRequest.flush(dummyTasks);
    serverMock.verify();
  });
});
