import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-qna',
  templateUrl: './upload-qna.component.html',
  styleUrls: ['./upload-qna.component.css']
})
export class UploadQnaComponent implements OnInit {


  selectedOption: string;
  question: string = "";

  noOfOptions: number = 5
  options: string[] = []

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
  }
}
