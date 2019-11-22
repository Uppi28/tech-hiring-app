import { Component, OnInit } from '@angular/core';
import { Globals } from "../shared/globals";
import firebase from "firebase";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Globals]
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
    this.globals.candName = this.candName;
    this.globals.candTech = this.candTech;
    this.globals.candExp = this.candExp;
    this.globals.candNotice = this.candNotice;
    console.log(this.globals);
    console.log(firebase);
  }

  goToMusigma() {
    window.open("https://www.mu-sigma.com");
  }
}
