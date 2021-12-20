import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient, private router: Router) { }

  readonly BaseURI = 'https://localhost:44318/api/Course/';



  updateCourse(Course, id: number):  Observable<any> {
    return this.http.post(this.BaseURI + 'EditSubject/'+id, Course);
  }

  AddCourse(Course):  Observable<any> {
    return this.http.post(this.BaseURI + '/Create/', Course);
  }
  deleteCourse(id) {
    return this.http.delete(this.BaseURI + '/CreateSubject/'+id);
  }

}
