import { Component, OnInit } from '@angular/core';
import { Globals } from "../shared/globals";
import { MatSnackBar, MatSnackBarModule } from "@angular/material";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  candName: string = "";
  techArray: string[] = ['Angular', 'React'];
  candTech: string = "";
  expRange: string[] = ['<6 months', '1-2 years', "3-5 years", "5-7 years", ">7 years"]
  candExp: string = "";
  noticeRange: string[] = ['Immediate', '<=1 month', '1-2 months', '2-4 months', '4-6 months', '>6 months'];
  candNotice: string = "";
  missingValues: string = "";

  constructor(public globals: Globals, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    
  }

  openSnackBar(message: string, action: string = 'Dismiss') {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

  getUserDets() {
    this.missingValues = '';
    if(this.candName === "" || this.candTech === "" || this.candExp === "" || this.candNotice === "") {
      console.log(this.candName, this.candTech, this.candExp);
      if(this.candName === '') {
        this.missingValues += ' Your Name'
      }
      if(this.candExp === '') {
        this.missingValues += ' Your Experience';
      }
      if(this.candNotice === '') {
        this.missingValues += ' Your Notice Period';
      }
      if(this.candTech === '') {
        this.missingValues += ' Technologies that you have worked on'
      }
      this.openSnackBar("Please enter " + this.missingValues);
    } else {
      let tempObj:any = {};
      tempObj['candName'] = this.candName;
      tempObj['candTech'] = this.candTech;
      tempObj['candExp'] = this.candExp;
      tempObj['candNotice'] = this.candNotice;
      this.globals.setCandValues(tempObj);
      this.router.navigate(['/testview'])
    }
  }

  goToMusigma() {
    window.open("https://www.mu-sigma.com");
  }
}
