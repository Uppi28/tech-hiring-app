import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionsService } from "../shared/questions.service";

export interface DialogData {
  quesData: object,
  key: string
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(public dialog: MatDialog, private quesService: QuestionsService) {
  }

  quesData: object;
  quesDataIndex: string[];
  quesDatum: object;
  editQuesIndex: string;
  showLoader: boolean = true;

  ngOnInit() {
    this.quesService.getQuestions().subscribe(res => {
      this.showLoader = false;
      this.quesData = res
      this.quesDataIndex = Object.keys(this.quesData);
    });
  }

  deleteQues(quesIndex) {
    this.showLoader = true;
    this.quesService.deleteQuestion(quesIndex).subscribe(res => {
      this.showLoader = false;
      this.ngOnInit()
    });
  }

  openDialog(editQuesIndex): void {
    this.editQuesIndex = editQuesIndex
    const dialogRef = this.dialog.open(EditQuestionDialog, {
      width: '80vw',
      maxHeight: '90vh',
      data: {
        quesData: JSON.parse(JSON.stringify(this.quesData[this.editQuesIndex])),
        key: this.editQuesIndex
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.showLoader = true;
      this.quesService.editQuestion(result['key'], result.quesData).subscribe(() => {
        this.showLoader = false;
        this.ngOnInit()
      });
    });
  }

}

@Component({
  selector: 'edit-question-dialog',
  templateUrl: 'edit-question-dialog.html',
  styleUrls: ['edit-question-dialog.css']
})
export class EditQuestionDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditQuestionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private quesService: QuestionsService) { }

  resetData: object = JSON.parse(JSON.stringify(this.data));
  quesData: object = JSON.parse(JSON.stringify(this.data['quesData']));
  key: string = JSON.parse(JSON.stringify(this.data['key']));
  returnData: object;
  ngOnInit() { }
  onResetClick(): void {
    this.data = { ...this.resetData['quesData'], Options: [...this.resetData['quesData']['Options']] };
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  onSubmitChanges() {
    this.data.quesData = {
      ...this.quesData,
      Options: this.quesData['Options']
    }
  }

  addOption(index) {
    this.quesData['Options'].splice(index + 1, 0, "");
  }
  removeOption(index) {
    this.quesData['Options'].splice(index, 1)
  }
}