import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/auth/auth.service';
import { ToastrService } from 'app/services/Toastr.service';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileModel: FormGroup;
  userTypes: any[] =[];
  constructor(private auth: AuthService, private courses: CourseService, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    const id =  this.auth.getUserID;
    this.getProfile(id);
    this.getUserTypes()

    this.profileModel = this.fb.group({
      Username: [{value: '',disabled: true}, Validators.required,],
      FirstName: ['', Validators.required],
      Surname: ['', Validators.required],
      UserTypeId: ['', Validators.required],
      school: ['', Validators.required],
    });
  }

  onSubmit() {
    this.courses.UpdateUser(this.profileModel.value,this.auth.getUserID).subscribe(result =>{
      console.log(result);
      this.auth.setUserType(result.UserTypeId)
      this.toastr.showNotification("successfully updated!",1);

    })
  }

  getProfile(id: number) {
    this.courses.getProfile(id).subscribe((profile:any) => {
      console.log(profile);

      this.profileModel.patchValue({
        Username: profile.Username,
        FirstName: profile.FirstName,
        Surname: profile.Surname,
        UserTypeId: profile.type,
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
