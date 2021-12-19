import { MapsComponent } from '../../admin-layout/maps/maps.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
  }

  dialogLogin() {
    const dialog = new MatDialogConfig;
    dialog.disableClose = false;
    dialog.width = '20rem';
    dialog.height = 'auto';
    dialog.data = { add: 'yes' }
    const dialogReference = this.dialog.open(
      MapsComponent,
      dialog
    );
  }

}
