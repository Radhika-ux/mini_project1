import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  displayName: any;
  menuDisplay: any;
  customerName: any;
  menuItems: any;
  removeItem: any;
  listofmenuitems: any =[];
  constructor() {
  
  }
  ngOnInit(): void {

  }
  submitfunction(event: any) {
    console.log(this.displayName);
   this.customerName=this.displayName;

  }
  addFunction(){
    //console.log(this.menuDisplay);
    this. listofmenuitems.push(this.menuDisplay)
        console.log(this.listofmenuitems);
  }
  
}