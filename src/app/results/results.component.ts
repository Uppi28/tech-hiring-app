import { Component, OnInit } from '@angular/core';
import { SubmissionsService } from "../shared/submissions.service";
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private subService: SubmissionsService) { }

  resultsDataIndex: string[] = [];
  resultsData: any;
  showLoader: boolean = true;

  ngOnInit() {
    this.subService.getTestResults().subscribe(res => {
      this.showLoader = false;
      this.resultsDataIndex = Object.keys(res);
      this.resultsData = res
      this.resultsDataIndex.map(datum => {
        this.resultsData[datum]['bgColor'] = (this.resultsData[datum]['candScore'] <= 5) ? 
        'red' : (this.resultsData[datum]['candScore'] > 5 && this.resultsData[datum]['candScore'] <= 25) ? 
            'orange' : 'green';
      })
    });
  }

}
