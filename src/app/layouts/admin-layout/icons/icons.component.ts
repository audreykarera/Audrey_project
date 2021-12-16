import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  selectedoption;
  selectedcentre;
  selectedcourse;
  options =[];
  dropdownList = [
    {value: 'course specific', viewValue: 'course specific', options: ['Grade 6 Math', 'Grade 7 Math', 'Grade 8 Math', 'Grade 9 Math', 'Grade 10 Math', 'Grade 11 Math', 'Grade 12 Math',
    'Grade 6 ICT', 'Grade 7 ICT', 'Grade 8 ICT', 'Grade 9 ICT', 'Grade 10 ICT', 'Grade 11 ICT', 'Grade 12 ICT',
     'Grade 8 Physics', 'Grade 9 Physics', 'Grade 10 Physics', 'Grade 11 Physics', 'Grade 12 Physics',
     'Grade 8 Accounting', 'Grade 9 Accounting', 'Grade 10 Accounting', 'Grade 11 Accounting', 'Grade 12 Accounting'
    ]},
    {value: 'centre specific', viewValue: 'centre specific', options: ['Bisho 1', 'Bisho 2', 'King Williams Town', 'Soweto']},
  ];
 
 
  constructor() { }

  onSelect(evt){
    var selectedList = this.dropdownList.find(list => list.value == this.selectedoption);
    this.options = selectedList.options;
    
  }

  ngOnInit() {
  }

}
