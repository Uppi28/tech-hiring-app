// config.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000';
  // getCharacters() {
  //   return this
  //           .http
  //           .post()
  // }
}