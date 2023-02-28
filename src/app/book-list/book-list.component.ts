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
  books!: Book[];

  constructor(private _apiservice: ApiserviceService) {}

  onInit() {
    this._apiservice.getBooks()
      .subscribe(
        books => this.books = books
      );
  }

}
