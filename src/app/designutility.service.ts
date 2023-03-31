import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignutilityService {
  constructor(private _httpClient: HttpClient) {}
  loading = new BehaviorSubject<Boolean>(false);

  getPosts(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
  getComments(): Observable<any> {
    return this._httpClient.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }
  getApiCall(): Observable<any> {
    return this._httpClient.get('localhost:8080/api/v1/get');
  }
}
