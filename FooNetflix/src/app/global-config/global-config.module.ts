import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class GlobalConfigModule {

    public static fireBase: {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    }

    public static apiMovieDb: {
      url: "https://api.themoviedb.org/3/"
    }

 }
