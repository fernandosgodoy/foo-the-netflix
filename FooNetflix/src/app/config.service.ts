import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private movieDbUri: string = "https://api.themoviedb.org/3/";
  private authKeyMovieDb: string = "";

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

  public getAuthKey() {
    return this.authKeyMovieDb;
  }

}
