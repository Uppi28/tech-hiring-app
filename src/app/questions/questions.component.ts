import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { quesData } from "./questions";

export interface DialogData {
  quesDatum: object;
  Options: string[]
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { 
  }

  quesData = quesData;
  quesDatum: object;
  
  ngOnInit() {
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