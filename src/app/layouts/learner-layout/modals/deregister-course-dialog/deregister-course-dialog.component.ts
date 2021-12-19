import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-deregister-course-dialog',
  templateUrl: './deregister-course-dialog.component.html',
  styleUrls: ['./deregister-course-dialog.component.scss']
})
export class DeregisterCourseDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  Close(){
    this.dialog.closeAll();
  }
}