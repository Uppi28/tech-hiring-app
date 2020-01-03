import { Component, OnInit, Inject } from '@angular/core';
import { SubmissionsService } from "../shared/submissions.service";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

export interface DialogData {
  ansData: any
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {

  constructor(public dialog: MatDialog, private subService: SubmissionsService) { }

  resultsDataIndex: string[] = [];
  resultsData: any;
  showLoader: boolean = true;

  ngOnInit() {
    this.subService.getTestResults().subscribe(res => {
      this.showLoader = false;
      this.resultsData = res
      for (const key in this.resultsData) {
        this.resultsDataIndex.push(key);
        if (this.resultsData.hasOwnProperty(key)) {
          this.resultsData[key]['bgColor'] = (this.resultsData[key]['candScore'] <= 5) ? 
          'red' : (this.resultsData[key]['candScore'] > 5 && this.resultsData[key]['candScore'] <= 25) ? 
              'orange' : 'green';
        }
      }
    });
  }
  openDialog(index):void {
    const dialogRef = this.dialog.open(DisplayAnswersDialog, {
      width: '90vw',
      maxHeight: '80vh',
      maxWidth: '80vw',
      data: {
        ansData: JSON.parse(JSON.stringify(this.resultsData[index].ansData))
      }
    })

    dialogRef.afterClosed().subscribe(res => {
      if(!res) {
        this.showLoader = false;
        return;
      }
    })
  }
}

@Component({
  selector: 'display-answers-dialog',
  templateUrl: 'display-answers-dialog.html',
  styleUrls: ['display-answers-dialog.css']
})

export class DisplayAnswersDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DisplayAnswersDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData){}

  ansKeys: string[];
  ngOnInit(){
    this.ansKeys = Object.keys(this.data['ansData']);
  }
}

