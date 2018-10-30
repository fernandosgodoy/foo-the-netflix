import { Component } from '@angular/core';
import { FilmesService } from '../filmes.service';
import { AuthMovieService } from '../auth-movie.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public filmes: any;

  constructor(public filmesService: FilmesService,
    public authService: AuthMovieService,
    private configService: ConfigService){
    try {
      var authToken = this.authService.Authorize(this.configService.getAuthKey());
      console.log(authToken);
      if (authToken != undefined) {
      this.filmesService.getLatest()
        .subscribe(res => this.filmes = res.json());
      }
    } catch (e) {
      console.error(e);
    }
  }

}
