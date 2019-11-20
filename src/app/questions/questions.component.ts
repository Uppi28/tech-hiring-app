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
  editQuesIndex: string
  ngOnInit() {
    this.http.get('https://tech-hiring-app.firebaseio.com/questions.json').subscribe(res => {
      this.quesData = res
      this.quesDataIndex = Object.keys(this.quesData);      
    });
  }

  updateQuestion(editedQue) {
    this.http.patch('https://tech-hiring-app.firebaseio.com/questions/' + this.editQuesIndex + '.json', editedQue).subscribe(res => {
      this.ngOnInit();
    })
  }

  openDialog(editQuesIndex): void {
    this.editQuesIndex = editQuesIndex
    const dialogRef = this.dialog.open(EditQuestionDialog, {
      width: '80vw',
      maxHeight: '90vh',
      // data: JSON.parse(JSON.stringify(editQues)) // To immutably send data
      data: {quesData: JSON.parse(JSON.stringify(this.quesData[this.editQuesIndex])), key: this.editQuesIndex}
    });

    dialogRef.afterClosed().subscribe(result => {      
      this.updateQuestion(result);
    });
  }

}

@Component({
  selector: 'edit-question-dialog',
  templateUrl: 'edit-question-dialog.html',
  styleUrls: ['edit-question-dialog.css']
})
export class EditQuestionDialog implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<EditQuestionDialog>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  quesData: object = JSON.parse(JSON.stringify(this.data['quesData']));
  ngOnInit() {
    // this.http.get('https://tech-hiring-app.firebaseio.com/questions.json')
  }
  onResetClick(): void {
    this.quesData = {...this.data['quesData'], Options: [...this.data['quesData'].Options]};
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  onSubmitChanges() {
    this.http.post('https://tech-hiring-app.firebaseio.com/questions/'+ this.data['key'] + '.json', this.quesData)
  } 

  addOption(index) {
    this.quesData['Options'].splice(index+1, 0, "");
  }
  removeOption(index) {
    this.quesData['Options'].splice(index,1)
  }
}