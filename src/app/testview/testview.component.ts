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
  answerData: object[] = [];
  ansSubmitted: boolean = false;

  ngOnInit() {
    this.http.get('https://tech-hiring-app.firebaseio.com/questions.json').subscribe(res => {
      this.quesData = JSON.parse(JSON.stringify(res));
      this.quesDataIndex = Object.keys(this.quesData);      
    });
  } 
  submitTest(updatedData) {
    console.log(updatedData);
    this.ansSubmitted = true;
  }
  onAnsSelect(quesIndex, event){
    let tempObj = {
      'userAns': event.value,
      'correctAns': this.quesData[quesIndex].correctOption
    };
    this.answerData[quesIndex] = tempObj;
  }

}
