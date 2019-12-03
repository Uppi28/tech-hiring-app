import { Component, OnInit } from '@angular/core';
import { quesData } from "../questions/questions";
import { QuestionsService } from "../shared/questions.service";
import { SubmissionsService } from "../shared/submissions.service";
import { Globals } from '../shared/globals';

@Component({
  selector: 'app-testview',
  templateUrl: './testview.component.html',
  styleUrls: ['./testview.component.css']
})
export class TestviewComponent implements OnInit {

  constructor(private quesService: QuestionsService, public globals: Globals, private subService: SubmissionsService) {}

  quesData: object = {};
  quesDataIndex: string[];
  correctOptions: number[] = new Array(quesData.length);
  answerData: object[] = [];
  ansSubmitted: boolean = false;
  candScore: number = 0;
  backgroundColor: string;
  showLoader: boolean = true;

  ngOnInit() {
    this.quesService.getQuestions().subscribe(res => {
      this.showLoader = false;
      this.quesData = JSON.parse(JSON.stringify(res));
      this.quesDataIndex = Object.keys(this.quesData);      
    });
  }
  submitTest() {
    console.log(this.answerData);
    // this.showLoader = true;
    // let tempObj = {};
    // this.candScore = 0
    // this.answerData.map((datum) => {
    //   if(datum['userAns'] === datum['correctAns']){
    //     this.candScore++;
    //   }
    //   else{
    //     this.candScore--;
    //   }
    // });
    // tempObj = {
    //   candName: this.globals.candData.candName,
    //   candExp: this.globals.candData.candExp,
    //   candNotice: this.globals.candData.candNotice,
    //   candTech: this.globals.candData.candTech,
    //   candScore: this.candScore
    // }
    
    
    // this.subService.submitTest(tempObj).subscribe(res => {
    //   this.showLoader = false;
    //   this.ansSubmitted = !this.ansSubmitted;
    //   this.backgroundColor = this.getbackgroundColor();
    // });
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
  }
}
