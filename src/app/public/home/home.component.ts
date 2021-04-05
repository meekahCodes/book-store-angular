import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books;
  authors;
  search = '';
  author_id = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBooks();
    this.getAuthors();

  }

  getBooks(){
 
    const params: any = new HttpParams().set('search', this.search)
                                        .set('user_id', this.author_id);

    this.http.get('http://127.0.0.1:8000/api/books', {params}).subscribe(
              (response: any) => {
                this.books = response.data;
              },
              (error: any) => {
                console.log(error);
              }
            )
  }

  getAuthors(){
    this.http.get('http://127.0.0.1:8000/api/authors?is_active=1').subscribe(
      (response: any) => {
        this.authors = response.data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  onKeyUpSearch(event: any) {
    this.search = event.target.value;
    this.getBooks();
  }

  onChangeAuthor(event: any){
    this.author_id = event.target.value;
    this.getBooks();
  }

}
