import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/auth/auth.service';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css']
})
export class RegisterCourseComponent implements OnInit {

  selectedstudenttype;
  selectedsubject;
  selectedcourse;
  subjects =[];
  courses: any[] =  [];
  centres: any[] =  [];





  dropdownList = [
    {value: 'Junior', viewValue: 'Junior', subjects: ['Mathjr', 'ICTjr'], courses: ['Grade 6 Math', 'Grade 7 Math']},
    {value: 'Senior', viewValue: 'Senior', subjects: ['Math', 'ICT', 'Accounting', 'Physics']},
  ];
  registerModel: FormGroup;


  constructor(private course: CourseService, private auth: AuthService, private fb: FormBuilder) { }

  onSelect(evt){
    var selectedList = this.dropdownList.find(list => list.value == this.selectedstudenttype);
    this.subjects = selectedList.subjects;
  }

  ngOnInit() {

    this.registerModel = this.fb.group({
      CourseId: ['', Validators.required],
      CentreId: ['', Validators.required],
      userId: ['', Validators.required],

    });

    this.getCourses(this.auth.getUserType)
  }

  getCourses(id) {
    this.course.getCourses(id).subscribe((courses) => {
      this.courses =  courses;
      console.log(this.courses)
    })
  }

  getCentres() {
    this.course.getCentres().subscribe((centres) => {
      this.centres =  centres;
      console.log(this.centres)
    })
  }
}
