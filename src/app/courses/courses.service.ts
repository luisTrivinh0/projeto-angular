import { Course } from './course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private courseUrl: string = 'http://localhost:3100/api/courses'

  constructor(private httpClient: HttpClient){ }

  retriveAll(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.courseUrl);
  }

  retriveById(id: number): Observable<Course>{
    return this.httpClient.get<Course>(this.courseUrl + '/' + id);
  }

  save(course: Course): Observable<Course> {
    if (course.id) {
      return this.httpClient.put<Course>(this.courseUrl + '/' + course.id, course);
    } else {
      return this.httpClient.post<Course>(this.courseUrl, course);
    }
  }

  deleteById(id: number, code: string): Observable<any>{
    return this.httpClient.delete<any>(this.courseUrl + '/' + id);
  }
}