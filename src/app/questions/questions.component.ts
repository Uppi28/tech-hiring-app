import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { quesData } from "./questions";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { 
  }

  animal: string;
  name: string;
  quesData = quesData;

  ngOnInit() {
    console.log(quesData);
  }

  editQuestion(index) {
    console.log(index);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditQuestionDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'edit-question-dialog',
  templateUrl: 'edit-question-dialog.html',
})
export class EditQuestionDialog {

  constructor(
    public dialogRef: MatDialogRef<EditQuestionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}