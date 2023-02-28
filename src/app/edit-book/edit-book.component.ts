import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscriber, timer } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';
import { CreateBookRequest } from '../books';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  constructor(private _apiservice:ApiserviceService,
              private router:Router) {}

  myimage!: Observable<any>;
  base64code!: any

  @ViewChild('titleInput') titleInput!: ElementRef;
  @ViewChild('coverInput') coverInput!: ElementRef;
  @ViewChild('genreInput') genreInput!: ElementRef;
  @ViewChild('authorInput') authorInput!: ElementRef;
  @ViewChild('contentInput') contentInput!: ElementRef;

  async onClickAdd(){

    const request:CreateBookRequest = await this.createRequest();

    const response = this._apiservice.createBook(request);
    response.subscribe((data) => {console.log(data.id)});
    
    window.location.reload();
  };

  sleep = (ms:number) => new Promise(r => setTimeout(r, ms));

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.myimage = d
      this.base64code = d
    })
  }
  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }

  async createRequest():Promise<CreateBookRequest>{

    const file: File = (this.coverInput.nativeElement.files as FileList)[0];
    this.convertToBase64(file);
    await this.sleep(100);

    const title = this.titleInput.nativeElement.value;
    const cover = this.base64code;
    const genre = this.genreInput.nativeElement.value;
    const author = this.authorInput.nativeElement.value;
    const content = this.contentInput.nativeElement.value;

    const request: CreateBookRequest = {
      title: title,
      cover: cover,
      genre: genre,
      author: author,
      content: content
    }

    return request;
  }

  onClickClear(){
    this.titleInput.nativeElement.value = '';
    this.coverInput.nativeElement.value = '';
    this.genreInput.nativeElement.value = '';
    this.authorInput.nativeElement.value = '';
    this.contentInput.nativeElement.value = '';
  }
}
