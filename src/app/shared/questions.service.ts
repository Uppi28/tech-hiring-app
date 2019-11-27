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
  getQuestions() {
    return this.http.get('https://tech-hiring-app.firebaseio.com/questions.json')
  }
  updateQuestion(editQuesIndex, editedQue) {
    return this.http.patch('https://tech-hiring-app.firebaseio.com/questions/' + editQuesIndex + '.json', editedQue)
  }
  deleteQuestion(quesIndex) {
    return this.http.delete('https://tech-hiring-app.firebaseio.com/questions/' + quesIndex + '.json')
  }
  editQuestion(encKey, quesData) {
    return this.http.patch('https://tech-hiring-app.firebaseio.com/questions/'+ encKey + '.json', quesData)
  }
  
}
