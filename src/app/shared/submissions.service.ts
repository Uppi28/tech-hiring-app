import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {

  constructor(private http: HttpClient) { }

  submitTest(tempObj) {
    return this.http.post('https://tech-hiring-app.firebaseio.com/submissions.json', tempObj)
  }

  getTestResults() {
    return this.http.get('https://tech-hiring-app.firebaseio.com/submissions.json')
  }
}
