import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public filmes: any;

  constructor(private http: Http){
    this.carregarFilmes();
  }

  private carregarFilmes(){
    this.http.get('',
      null);
  }

}
