import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.loadAuthors()

  }

  loadAuthors(){
    this.http.get('http://127.0.0.1:8000/api/authors').subscribe(
      (response: any) => {
        this.authors = response.data
      },
      (error: any) => {
        console.log(error);
      }
    );
  };

  changeStatus(event: any){
    let status = event.target.value;
    let user_id = event.target.dataset.author_id;

    const headers = new HttpHeaders({
      Authorization: `Bearer  ${localStorage.getItem('token')}`
    });

    this.http.post('http://127.0.0.1:8000/api/v1/user/change-status/'+user_id, {status: status}, {headers}).subscribe(
      (response: any) => {
        alert('status updated')
        this.loadAuthors();
      },
      (error: any) => {

      }
    );

  };

}
