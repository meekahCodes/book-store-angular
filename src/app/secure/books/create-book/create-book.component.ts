import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private http:HttpClient) {}

   ngOnInit(): void {

    this.form = this.fb.group({
      title:  ['', Validators.required],
      description:   ['', Validators.required],
    });

    if(localStorage.getItem('token') === null){
      this.router.navigate(['/login']);
    }

  }

  submit(){

    const headers = new HttpHeaders({
      Authorization : `Bearer ${localStorage.getItem('token')}`
    });

    const formData = this.form.getRawValue();

    this.http.post('http://127.0.0.1:8000/api/v1/books', formData, {headers}).subscribe(
      (response: any) => {
        this.router.navigate(['/secure/books']);
      },
      (error: any) => {
        console.log(error);
      }
    )


  }

}
