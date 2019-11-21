import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
        
  }

  goToMusigma() {
    window.open("https://www.mu-sigma.com");
  }


}
