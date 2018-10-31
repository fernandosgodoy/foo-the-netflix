import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {

  private idMovie :  any;
  public movie : any;

  constructor(private filmeService: FilmesService,
    private router: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.idMovie = this.router.snapshot.paramMap.get('id');
    this.loadMovieDetail();
  }

  loadMovieDetail() {
    if (this.idMovie != undefined) {
      this.filmeService.detail(this.idMovie)
      .subscribe(res => {
        this.movie = res.json();
        console.log(res.json());
      });
    }
  }

}
