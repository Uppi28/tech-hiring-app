import { Component, OnInit } from '@angular/core';
import { quesData } from "../questions/questions";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-testview',
  templateUrl: './testview.component.html',
  styleUrls: ['./testview.component.css']
})
export class TestviewComponent implements OnInit {

  constructor(private http: HttpClient) { }

  quesData: object = {};
  quesDataIndex: string[];
  correctOptions: number[] = new Array(quesData.length);

  ngOnInit() {
    this.http.get('https://tech-hiring-app.firebaseio.com/questions.json').subscribe(res => {
      this.quesData = JSON.parse(JSON.stringify(res));
      this.quesDataIndex = Object.keys(this.quesData);      
    });
    let answerData = JSON.parse(JSON.stringify(this.quesData));
    let d,i;
    Object.keys(answerData).map((d) => {
      answerData[d]['userAns'] = "";
    })
  } 
  submitTest(updatedData) {
    console.log(updatedData);
  }

}
