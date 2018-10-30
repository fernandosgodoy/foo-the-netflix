import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private base_url: string;
  private modelo: string = "movie";
  private apiuri: string;

  constructor(private http: Http,
    private configService: ConfigService) {
      this.base_url = this.configService.apiMovieDb();
      this.apiuri = this.base_url + this.modelo + '/';
  }

   public getLatest(){
    var token = '';

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);

    // let options = new RequestOptions({ headers: headers });

    return this.http.get(this.apiuri + 'latest');
   }

}
