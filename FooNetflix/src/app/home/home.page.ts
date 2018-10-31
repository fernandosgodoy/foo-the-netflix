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

  constructor(public filmesService: FilmesService,
    private router: Router){
    try {
      this.filmesService.upcoming()
        .subscribe(res => {
          this.filmes = res.json().results;
          console.log(this.filmes);
        });
      
    } catch (e) {
      console.error(e);
    }
  }

  public detalhar(idMovie) {
      console.log('Id do filme: ' + idMovie);
      this.router.navigate(['/Detalhe', { idMovie: idMovie }]);
  }

}

