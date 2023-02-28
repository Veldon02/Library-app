import { Component, Input} from '@angular/core';
import { Book } from '../books';
import { MatDialog } from '@angular/material/dialog';
import { BooksPageComponent } from '../books-page/books-page.component';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent {
  @Input() book!: Book

  constructor(private dialogRef : MatDialog) { }
  
  openDialog(num:number) {
    this.dialogRef.open(BooksPageComponent, {data: {
      id : num}
    });
  }
}
