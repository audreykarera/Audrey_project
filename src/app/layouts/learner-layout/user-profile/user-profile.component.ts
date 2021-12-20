import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/auth/auth.service';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileModel: FormGroup;
  userTypes: any[] =[];
  constructor(private auth: AuthService, private courses: CourseService, private fb: FormBuilder) { }

  ngOnInit() {
    const id =  this.auth.getUserID;
    this.getProfile(id);
    this.getUserTypes()

    this.profileModel = this.fb.group({
      Username: [{value: '',disabled: true}, Validators.required,],
      FirstName: ['', Validators.required],
      Surname: ['', Validators.required],
      type: ['', Validators.required],
      school: ['', Validators.required],
    });
  }

  onSubmit() {

  }

  getProfile(id: number) {
    this.courses.getProfile(id).subscribe((profile:any) => {
      console.log(profile);

      this.profileModel.patchValue({
        Username: profile.Username,
        FirstName: profile.FirstName,
        Surname: profile.Surname,
        type: profile.type,
        school: profile.isAtSchool
      })

    })
  }
  getUserTypes() {

    this.auth.getTypes().subscribe(res => {
      console.log(res);
      this.userTypes =  res;
    })
  }

}
