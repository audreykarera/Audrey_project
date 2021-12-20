import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private auth: AuthService, private courses: CourseService) { }

  ngOnInit() {
    const id =  this.auth.getUserID;
    this.getProfile(id);
  }

  getProfile(id: number) {
    this.courses.getProfile(id).subscribe(profile => {
      console.log(profile)
    })
  }

}
