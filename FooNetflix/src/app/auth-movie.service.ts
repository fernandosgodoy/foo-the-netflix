import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthMovieService {

  private base_url: string;
  private modelo: string = "authenticate";
  private apiuri: string;

  constructor(private http: Http,
    private configService: ConfigService) {
      this.base_url = this.configService.apiMovieDb();
      this.apiuri = this.base_url + this.modelo + '/';
  }

  public Authorize(token){
    var authToken = "";
    this.http.get(this.apiuri + token)
      .subscribe(res => authToken = res.json());
    return authToken;
   }


}
