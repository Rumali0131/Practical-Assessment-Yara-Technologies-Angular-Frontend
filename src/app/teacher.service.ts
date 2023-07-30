import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseURL = "http://localhost:8080/api/v1/teachers";

  constructor(private httpClient: HttpClient) { }

  // List teachers
  getTeachersList(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(this.baseURL)
  }

  // Create teacher
  createTeacher(teacher: Teacher): Observable<Object> {
    return this.httpClient.post(this.baseURL, teacher)
  }
}
