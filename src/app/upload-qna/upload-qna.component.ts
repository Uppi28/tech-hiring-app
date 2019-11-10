import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-upload-qna',
  templateUrl: './upload-qna.component.html',
  styleUrls: ['./upload-qna.component.css']
})
export class UploadQnaComponent implements OnInit {
  selectedOption: string = "";
  question: string = "";
  noOfOptions: number = 5
  options: string[] = new Array(5);
  questionDifficulty: string = "Easy";
  emptyValidator = new FormControl('', [Validators.required]);
  difficultyOptions: string[] = ['Hard', 'Medium', 'Easy'];
  constructor() { }

  ngOnInit() {
    
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  onSubmit() {
    
    console.log("Question: ", this.question);
    console.log("Options: ", this.options);
    console.log("SelectedOption: ", this.selectedOption);
    console.log("Difficulty: ", this.questionDifficulty);
  }

  onReset(form) {
    console.log(form);
    
  }

  getErrorMessage() {
    return this.emptyValidator.hasError('required') ? 
      'please enter a question' : ''
  }  
}
