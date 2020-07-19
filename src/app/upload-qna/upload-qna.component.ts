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
  correctOption: string = "";
  question: string = "";
  noOfOptions: number = 4
  questionDifficulty: string = "Easy";
  emptyValidator = new FormControl('', [Validators.required]);
  difficultyOptions: string[] = ['Hard', 'Medium', 'Easy'];
  technologies: string[] = ['HTML', 'CSS', 'JS', 'Angular', 'React', Git];
  selectedTech: string = "HTML";
  totalOptions: number = 4
  options: string[] = new Array(this.totalOptions);
  allQuestions: object[] = [];
  
  constructor(private quesService: QuestionsService, private http: HttpClient) { }

  ngOnInit() {
    
  }
  showLoader: boolean = false;

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  onSubmit() {
    this.showLoader = true;
    // Resetting before assigning values
    let tempObj: object = {};
    // Setting values on update
    tempObj['Question'] = this.question;
    tempObj['Options'] = this.options;
    tempObj['correctOption'] = this.correctOption;
    tempObj['difficulty'] = this.questionDifficulty;
    tempObj['technology'] = this.selectedTech;
    this.quesService.uploadQuestion(tempObj).subscribe(res => {
      this.showLoader = false;
      console.log("Your question with ID" + res['name'] + "has been submitted")
    })
    this.onReset();
  }

  onReset() {
    this.question = "";
    this.options = new Array(4);
    this.correctOption = "";
  }

  addOption(index) {
    this.options.splice(index+1, 0, "");
    this.totalOptions = this.options.length;
    
  }
  removeOption(index) {
    this.options.splice(index,1)
    this.totalOptions = this.options.length
  }
}
