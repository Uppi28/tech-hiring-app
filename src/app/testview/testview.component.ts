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
  selectedOptions: number[] = new Array(quesData.length);

  ngOnInit() {
    let answerData = [...this.quesData] 
    let d,i;
    answerData.map((d,i) => {
      answerData[i]['userAns'] = "";
    })
  } 
  submitTest(updatedData) {
    console.log(updatedData);
  }

}
