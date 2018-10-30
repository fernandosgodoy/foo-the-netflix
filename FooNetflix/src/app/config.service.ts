import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public movieDbUri: string = "https://api.themoviedb.org/3/";

  public static fireBase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  }

  public apiMovieDb(): string {
    return this.movieDbUri;
  }

}
