import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      email: '',
      password: ''
    });

    if(localStorage.getItem('token') !== null){
      this.router.navigate(['/secure']);
    }

  }

  submit(){
    
    const formData = this.form.getRawValue();


    this.http.post('http://127.0.0.1:8000/api/login', formData).subscribe(
                  (response : any) => {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('user_id', response.user.id);
                    localStorage.setItem('role', response.user.role);
                    localStorage.setItem('user_name', response.user.name);
                    this.router.navigate(['secure']);
                  },
                  (error: any) => {
                    console.log(error);
                  }
             );
  }

}
