import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {

 id!: number;
 book:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private _apiservice:ApiserviceService) { 
    this.id = data.id;
    this.book = this._apiservice.getBook(this.id).subscribe((data) => {this.book = data});
  }
  


}
