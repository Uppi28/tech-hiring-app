import { Component, OnInit } from '@angular/core';
import { quesData } from "./questions";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { 
  }

  quesData = quesData;

  ngOnInit() {
    console.log(quesData);
  }

}
