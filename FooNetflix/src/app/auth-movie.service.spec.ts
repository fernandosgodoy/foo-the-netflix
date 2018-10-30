import { TestBed } from '@angular/core/testing';

import { AuthMovieService } from './auth-movie.service';

describe('AuthMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthMovieService = TestBed.get(AuthMovieService);
    expect(service).toBeTruthy();
  });
});
