import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_KEY = 'e40d07f00b094602953cc3bf8537477e';
  //API_KEY = 'get your own at https://newsapi.org/'

  constructor(private httpClient: HttpClient) { }

  getNews(topic: string): Observable<any>{
    return this.httpClient.get(`https://newsapi.org/v2/everything?q=${topic}&sortBy=popularity&apiKey=${this.API_KEY}`);
  }
}