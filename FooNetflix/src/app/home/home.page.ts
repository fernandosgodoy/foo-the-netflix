import { Component } from '@angular/core';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public filmes: any;

  constructor(private filmesService: FilmesService){
    this.iniciarDadosTela(filmesService);
  }

  private iniciarDadosTela(filmesService: FilmesService) {
    try {
      filmesService.getLatest()
        .subscribe(res => this.filmes = res.json());
    } catch (e) {
      console.error(e);
    }
  }
  
}
