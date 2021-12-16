import { MapsComponent } from './../maps/maps.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

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
