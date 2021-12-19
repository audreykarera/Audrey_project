import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient, private router: Router) { }

  private isloggedin$: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  readonly BaseURI = 'https://localhost:44318/api/Users';


  getCourses(id: number):  Observable<any[]> {
    return this.http.get<any[]>(this.BaseURI  + '/getCourses/'+ id);
  }

  getCentres():  Observable<any[]> {
    return this.http.get<any[]>(this.BaseURI  + '/getCentres/');
  }
}
