import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './books';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) {}

  public getBooks(): Observable <any>{
    return this._http.get<any>("https://localhost:8080/api/books?Property=author");
  }
}
