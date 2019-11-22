import { Component, OnInit } from '@angular/core';
import { quesData } from "../questions/questions";
import { HttpClient } from "@angular/common/http";
import { Globals } from '../shared/globals';

@Component({
  selector: 'app-testview',
  templateUrl: './testview.component.html',
  styleUrls: ['./testview.component.css']
})
export class TestviewComponent implements OnInit {

  constructor(private http: HttpClient, public globals: Globals) {}

  quesData: object = {};
  quesDataIndex: string[];
  correctOptions: number[] = new Array(quesData.length);
  answerData: object[] = [];
  ansSubmitted: boolean = false;
  candScore: number = 0;
  backgroundColor: string;

  ngOnInit() {
    this.http.get('https://tech-hiring-app.firebaseio.com/questions.json').subscribe(res => {
      this.quesData = JSON.parse(JSON.stringify(res));
      this.quesDataIndex = Object.keys(this.quesData);
    });
  }
  submitTest() {
    let tempObj = {};
    this.candScore = 0
    this.answerData.map((datum) => {
      if(datum['userAns'] === datum['correctAns']){
        this.candScore++;
      }
      else{
        this.candScore--;
      }
    });
    tempObj[this.globals.candData.candName] = {
      candExp: this.globals.candData.candExp,
      candNotice: this.globals.candData.candNotice,
      candTech: this.globals.candData.candTech,
      candScore: this.candScore
    }
    this.http.post('https://tech-hiring-app.firebaseio.com/submissions.json', tempObj).subscribe(res => {
      this.ansSubmitted = !this.ansSubmitted;
      this.backgroundColor = this.getbackgroundColor();
    });
  }

  getbackgroundColor() {
    if (this.candScore < 5) {
      return 'red'
    } else if (this.candScore > 5 && this.candScore < 25) {
      return 'orange'
    }
    else {
      return 'green'
    }
  }
  onAnsSelect(quesIndex, event) {
    let tempObj = {
      'question': this.quesData[quesIndex]['Question'],
      'userAns': event.value,
      'correctAns': this.quesData[quesIndex].correctOption
    };
    this.answerData.push(tempObj);
    console.log(this.answerData);
    
  }
}
