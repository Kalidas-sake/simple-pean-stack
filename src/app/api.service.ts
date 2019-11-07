import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = 'http://localhost:3000/api/';
 
  constructor(private http:HttpClient) { 
  }
  
  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.baseURL+'currencies', {responseType: 'json'});
}
 }