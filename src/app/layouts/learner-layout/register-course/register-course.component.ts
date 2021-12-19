import { Component, OnInit } from '@angular/core';

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
  courses =[];
  dropdownList = [
    {value: 'Junior', viewValue: 'Junior', subjects: ['Mathjr', 'ICTjr'], courses: ['Grade 6 Math', 'Grade 7 Math']},
    {value: 'Senior', viewValue: 'Senior', subjects: ['Math', 'ICT', 'Accounting', 'Physics']},
  ];


  constructor() { }

  onSelect(evt){
    var selectedList = this.dropdownList.find(list => list.value == this.selectedstudenttype);
    this.subjects = selectedList.subjects;
  }

  ngOnInit() {
  }

}
