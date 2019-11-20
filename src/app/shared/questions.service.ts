import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  uploadQuestion(data){
    return this.http.post('https://tech-hiring-app.firebaseio.com/questions.json', data)
  }
}
