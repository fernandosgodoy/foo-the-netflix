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
    var api_key = this.configService.getAuthKey();
    return this.http.get(this.apiuri + 'latest' + '?api_key=' + api_key);
   }

   public upcoming() {
    var api_key = this.configService.getAuthKey();
    return this.http.get(this.apiuri + 'upcoming' + '?api_key=' + api_key);
   }

   public detail(idMovie) {
    var api_key = this.configService.getAuthKey();
    return this.http.get(this.apiuri + idMovie + '?api_key=' + api_key);
   }

}
