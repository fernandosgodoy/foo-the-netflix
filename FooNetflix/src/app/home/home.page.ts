import { Component } from '@angular/core';
import { FilmesService } from '../filmes.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public filmes: any;
  public maisPopulares: any;
  public isLogged: boolean = false;

  private MSG_FAZER_LOGIN : string = 'Você precisa estar logado para visualizar os favoritos.';

  constructor(public filmesService: FilmesService,
    private router: Router,
    public alertCtrl: AlertController){
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
    if (!this.verificarLogado()) 
      this.presentAlert('Atenção', 
        this.MSG_FAZER_LOGIN);
    
  }

  public verificarLogado() : boolean {
    this.isLogged = false;
    return this.isLogged;
  }

  private presentAlert(pTitle, pMessage) {
    let alert = this.alertCtrl.create({
      // title: pTitle,
      message: pMessage,
      buttons: ['ok']
    });
    this.alertCtrl.getTop();
    // this.alertCtrl.present();
  }

}

