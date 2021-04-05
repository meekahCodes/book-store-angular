import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { SecureComponent } from './secure/secure.component';
import { BooksComponent } from './secure/books/books.component';
import { CreateBookComponent } from './secure/books/create-book/create-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorsComponent } from './secure/authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    SecureComponent,
    BooksComponent,
    CreateBookComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
