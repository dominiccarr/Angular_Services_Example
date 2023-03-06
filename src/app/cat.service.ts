import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  API_KEY = 'get your own at https://thecatapi.com/'

  constructor(private httpClient: HttpClient) { }

  getCat(): Observable<any>{
    return this.httpClient.get(`https://api.thecatapi.com/v1/images/search?api_key=${this.API_KEY}`);
  }
}