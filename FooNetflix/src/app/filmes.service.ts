import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
      this.apiuri = this.base_url + '/' + this.modelo + '/';
  }

   public getLatest(){
    return this.http.get(this.apiuri + 'latest');
   }

}
