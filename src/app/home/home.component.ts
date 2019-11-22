import { Component, OnInit } from '@angular/core';
import { Globals } from "../shared/globals";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  candName: string = "";
  candTech: string = "";
  candExp: string = "";
  candNotice: string = "";

  constructor(public globals: Globals) { }

  ngOnInit() {
    
  }

  getUserDets() {
    // let tempObj: {candName:string, candTech:string, candExp:string, candNotice:string} =;
    let tempObj:any = {};
    tempObj['candName'] = this.candName;
    tempObj['candTech'] = this.candTech;
    tempObj['candExp'] = this.candExp;
    tempObj['candNotice'] = this.candNotice;
    this.globals.setCandValues(tempObj);
  }

  goToMusigma() {
    window.open("https://www.mu-sigma.com");
  }
}
