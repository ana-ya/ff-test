import { TestBed, inject } from '@angular/core/testing';

import { JokesService } from '@app/core/jokes/jokes.service';

describe('JokesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokesService]
    });
  });

  it('should be created', inject([JokesService], (service: JokesService) => {
    expect(service).toBeTruthy();
  }));
});
