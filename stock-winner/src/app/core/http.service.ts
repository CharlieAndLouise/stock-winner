import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get nativeHttp(): HttpClient { return this.http; }

  get(url: string) {
    this.http.get(url);
  }

}
