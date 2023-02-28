import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CreateBookRequest } from './books';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) {}

  public getBooks(){
    return this._http.get("https://localhost:8080/api/books?Property=title");
  }

  public getRecommendedBooks(){
    return this._http.get("https://localhost:8080/api/books/recommended");
  }

  public createBook(request:CreateBookRequest){
    return this._http.post<any>("https://localhost:8080/api/books/save", request);
  }

 public getBook(id:number){
  return this._http.get("https://localhost:8080/api/books/" + id);
 }
}
