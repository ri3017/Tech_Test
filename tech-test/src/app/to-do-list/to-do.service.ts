import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "./task";

@Injectable({
  providedIn: "root",
})
export class ToDoService {
  SERVER_URL = "http://localhost:3000/tasks";

  constructor(private httpClient: HttpClient) {}

  public get() {
    return this.httpClient.get<Task[]>(this.SERVER_URL);
  }

  public getById(id: number) {
    return this.httpClient.get(`${this.SERVER_URL}/${id}`);
  }

  public post(values) {
    return this.httpClient.post(this.SERVER_URL, values);
  }

  public patch(id: string, values) {
    return this.httpClient.patch(`${this.SERVER_URL}/${id}`, values);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.SERVER_URL}/${id}`);
  }
}
