import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  auth_user;
  books;

  constructor(private http: HttpClient, private  router: Router) {
    this.auth_user = {
      id: localStorage.getItem('user_id'),
      name: localStorage.getItem('user_name'),
      role: localStorage.getItem('role'),
    };

    

    if(localStorage.getItem('token') === null){
      this.router.navigate(['/login']);
    }
  }


  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    console.log(this.auth_user);
    const params = new HttpParams().set('user_id', this.auth_user.id);
    this.http.get('http://127.0.0.1:8000/api/books',{params}).subscribe(
      (response: any) => {
        this.books = response.data;
        console.log(this.books);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
