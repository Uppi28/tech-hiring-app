import { Component, OnInit } from '@angular/core';
import { quesData } from "../questions/questions";


@Component({
  selector: 'app-testview',
  templateUrl: './testview.component.html',
  styleUrls: ['./testview.component.css']
})
export class TestviewComponent implements OnInit {

  constructor() { }

  quesData = quesData
  ngOnInit() {
    console.log(this.quesData[0].Options);
    
  }

}
