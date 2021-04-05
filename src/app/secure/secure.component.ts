import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.sass']
})
export class SecureComponent implements OnInit {

  user;

  constructor(private http: HttpClient, private router: Router) {

    if(localStorage.getItem('token') === null){
      this.router.navigate(['/login']);
    }

   }

  ngOnInit(): void {

    const header =  new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}` 
    })

    this.http.get('http://127.0.0.1:8000/api/v1/user',{headers: header}).subscribe(
        (response: any) => {
          this.user = response.user;
        },
        (error: any) => {
          localStorage.removeItem('item');
          this.router.navigate(['/login']);
        }
    )
  }


}
