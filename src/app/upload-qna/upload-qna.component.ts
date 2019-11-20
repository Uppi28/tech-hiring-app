import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { QuestionsService } from "../shared/questions.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-qna',
  templateUrl: './upload-qna.component.html',
  styleUrls: ['./upload-qna.component.css']
})
export class UploadQnaComponent implements OnInit {
  selectedOption: string = "";
  question: string = "";
  noOfOptions: number = 5
  questionDifficulty: string = "Easy";
  emptyValidator = new FormControl('', [Validators.required]);
  difficultyOptions: string[] = ['Hard', 'Medium', 'Easy'];
  technologies: string[] = ['HTML', 'CSS', 'JS', 'Angular', 'React'];
  selectedTech: string = "HTML";
  totalOptions: number = 5
  options: string[] = new Array(this.totalOptions);
  allQuestions: object[] = [];
  
  constructor(private quesService: QuestionsService, private http: HttpClient) { }

  ngOnInit() {
    
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  onSubmit() {
    // Resetting before assigning values
    let tempObj: object = {};
    // Setting values on update
    tempObj['Question'] = this.question;
    tempObj['Options'] = this.options;
    tempObj['selectedOption'] = this.selectedOption;
    tempObj['difficulty'] = this.questionDifficulty;
    tempObj['technology'] = this.selectedTech;
    this.quesService.uploadQuestion(tempObj).subscribe(res => console.log("Your question with ID" + res + "has been submitted"))
  }

  onReset(form) {
    this.question = "";
    this.options = new Array(5);
    this.selectedOption = "";
  }

  addOption(index) {
    console.log(index);
    this.options.splice(index+1, 0, "");
    this.totalOptions = this.options.length;
    console.log(this.totalOptions);
    
  }
  removeOption(index) {
    this.options.splice(index,1)
    this.totalOptions = this.options.length
    console.log(this.totalOptions)
  }
}
