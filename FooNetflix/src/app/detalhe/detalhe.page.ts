import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {

  private idMovie :  number;
  public movie : any;

  constructor(private filmeService: FilmesService) {
    console.log('Id Movie Enviado');
    console.log(this.idMovie);

    this.filmeService.detail(this.idMovie)
        .subscribe(res => {
          this.movie = res.json();
          console.log(res.json());
        });
   }

  ngOnInit() {
  }

}
