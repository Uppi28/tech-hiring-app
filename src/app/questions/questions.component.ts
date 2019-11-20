import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { quesData } from "./questions";
import { HttpClient } from "@angular/common/http";

export interface DialogData {
  quesDatum: object;
  Options: string[];
  Question: string;
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(public dialog: MatDialog, private http: HttpClient) { 
  }

  quesData: object;
  quesDataIndex: string[];
  quesDatum: object;
  
  ngOnInit() {
    this.http.get('https://tech-hiring-app.firebaseio.com/questions.json').subscribe(res => {
      this.quesData = res
      this.quesDataIndex = Object.keys(this.quesData);
      console.log(this.quesData, this.quesDataIndex);
      
    });
  }

  openDialog(editQues): void {
    const dialogRef = this.dialog.open(EditQuestionDialog, {
      width: '80vw',
      maxHeight: '90vh',
      // data: JSON.parse(JSON.stringify(editQues)) // To immutably send data
      data: editQues
    });
  }

}

@Component({
  selector: 'edit-question-dialog',
  templateUrl: 'edit-question-dialog.html',
  styleUrls: ['edit-question-dialog.css']
})
export class EditQuestionDialog {

  constructor(
    public dialogRef: MatDialogRef<EditQuestionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  
  onResetClick(): void {
    console.log(this.data);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  onSubmitChanges() {
    console.log(this.data);
  }

  addOption(index) {
    console.log(index);
    this.data.Options.splice(index+1, 0, "");
  }
  removeOption(index) {
    this.data.Options.splice(index,1)
  }
}