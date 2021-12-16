import { Component, OnInit } from '@angular/core';

interface company {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  companies: company[] = [
    {value: 'Yes', viewValue: 'at a registered school'},
    {value: 'Supplementary exam', viewValue: 'writing a supplementary exam'}
  ];
  isSelected: boolean=false; 
  Yes: Boolean | undefined;

  get(data: { value: string; }){
    this.isSelected = true; 
    if(data.value == 'Yes'){
      this.Yes = true;
    } else if(data.value =='Supplementary exam'){
      this.isSelected = false;
      this.Yes = false;
    }
    else{
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
