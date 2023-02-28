import { Component, ViewChild, ElementRef } from '@angular/core';
// import { books } from '../books';
import { Book } from '../books';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books:any = [];
  recommendedBooks:any = [];

  constructor(private _apiservice: ApiserviceService) {}

  ngOnInit():void {
    this._apiservice.getBooks()
      .subscribe(
        books => this.books = books
      );

      this._apiservice.getRecommendedBooks()
      .subscribe(
        books => this.recommendedBooks = books
      );
  }

  onTabAll(){
    this._apiservice.getBooks()
      .subscribe(
        books => this.books = books
      );
  }

  onTabRecommended(){
    this._apiservice.getRecommendedBooks()
      .subscribe(
        books => this.books = books
      );
  }

}
