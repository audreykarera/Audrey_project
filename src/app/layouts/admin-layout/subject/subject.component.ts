import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../services/subjects.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  subjects: any[] = [];

  constructor(private subjectService: SubjectsService) { }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects() {
    this.subjectService.getSubjects().subscribe(res => {
        console.log(res)
    })
  }
}
