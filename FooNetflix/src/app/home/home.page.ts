import { Component } from '@angular/core';
import { FilmesService } from '../filmes.service';
import { NavController } from '@ionic/angular';
import { DetalhePage } from '../detalhe/detalhe.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public filmes: any;
  public maisPopulares: any;

  constructor(public filmesService: FilmesService,
    private router: Router){
    try {
      this.filmesService.upcoming()
        .subscribe(res => {
          this.filmes = res.json().results;
          this.carregarMaisPopulares();
        });
      
    } catch (e) {
      console.error(e);
    }
  }

  private carregarMaisPopulares() {
    this.filmesService.getPopular()
      .subscribe(res => {
        this.maisPopulares = res.json().results;
      });
  }

  public detalhar(idMovie) {
      this.router.navigate(['/Detalhe', { idMovie: idMovie }]);
  }

  public favorite(idMovie) {
    
  }

}

