import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', Validators.required],
      email:  ['', [Validators.required, Validators.email]],
      password:  ['', Validators.required],
      confirm_password:  ['', Validators.required],
    });

  }

  submit(){
    const formData = this.form.getRawValue();

    this.http.post('http://127.0.0.1:8000/api/register', formData).subscribe(
      (response :  any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user_id', response.user.id);
        localStorage.setItem('role', response.user.role);
        localStorage.setItem('user_name', response.user.name);
        this.router.navigate(['secure']);
      },
      (error: any) => {
        console.log(error);
        alert("Error Please Contact Admin");
      }
    )
    console.log(this.form.getRawValue());
  }

}
