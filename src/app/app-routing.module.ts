import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './public/register/register.component';
import { AuthorsComponent } from './secure/authors/authors.component';
import { BooksComponent } from './secure/books/books.component';
import { CreateBookComponent } from './secure/books/create-book/create-book.component';
import { SecureComponent } from './secure/secure.component';

const routes: Routes = [
  {
    path: '', 
    component: PublicComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {path: 'secure', component: SecureComponent},
  {path: 'secure/authors', component: AuthorsComponent},
  {path: 'secure/books', component: BooksComponent},
  {path: 'secure/books/create', component: CreateBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
