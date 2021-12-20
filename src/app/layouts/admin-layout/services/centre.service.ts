import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  constructor(private http: HttpClient, private router: Router) { }

  readonly BaseURI = 'https://localhost:44318/api/Users/';



  updateCentre(centre, id: number):  Observable<any> {
    return this.http.post(this.BaseURI + 'EditCentre/'+id, centre);
  }

  AddCentre(centre):  Observable<any> {
    return this.http.post(this.BaseURI + '/Create/', centre);
  }
  deleteCentre(id) {
    return this.http.delete(this.BaseURI + '/DeleteCentre/'+id);
  }

}
