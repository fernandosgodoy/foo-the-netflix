import { TestBed } from '@angular/core/testing';

import { FilmesService } from './filmes.service';
import { exec } from 'child_process';

describe('FilmesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmesService = TestBed.get(FilmesService);
    expect(service).toBeTruthy();
  });
});

describe('getLatest', function() {

  it('Recuperar últimos filmes', function() {
    const service: FilmesService = TestBed.get(FilmesService);
    expect(service.getLatest).toBeDefined();
  });

});
