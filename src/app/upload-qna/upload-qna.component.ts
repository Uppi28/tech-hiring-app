import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-upload-qna',
  templateUrl: './upload-qna.component.html',
  styleUrls: ['./upload-qna.component.css']
})
export class UploadQnaComponent implements OnInit {
  selectedOption: string;
  question: string = "";
  noOfOptions: number = 5
  options: string[] = [];
  questionDifficulty: string = "Easy";
  emptyValidator = new FormControl('', [Validators.required]);
  difficultyOptions: string[] = ['Hard', 'Medium', 'Easy'];
  constructor() { }

  ngOnInit() {
    let i  = this.noOfOptions;
    console.log(this.noOfOptions, this.options);
    
    while(i !== 0) {
      this.options.unshift("Option" + i);
      i--;
    }
  }

  onSubmit() {
    console.log(this.question);
    console.log(this.options);
    console.log(this.selectedOption);
    console.log(this.questionDifficulty);
    
  }

  onReset(form) {
    console.log(form);
    
  }

  getErrorMessage() {
    return this.emptyValidator.hasError('required') ? 
      'please enter a question' : ''
  }
}
