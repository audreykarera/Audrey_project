import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  Close(){
    this.dialog.closeAll();
  }
}