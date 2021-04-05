import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loggedIn = false;
  IsAdmin = false;
  IsAuthor = false;

  ngOnInit(){
    this.loggedIn = localStorage.getItem('token') !== null;
  }

  logout(){
    
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('role');
    localStorage.removeItem('user_name');
    this.loggedIn = false;
  }
}
