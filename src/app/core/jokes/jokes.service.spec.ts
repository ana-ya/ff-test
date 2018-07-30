import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { JokesService } from '@app/core/jokes/jokes.service';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { HttpClientTestingModule } from '../../../../node_modules/@angular/common/http/testing';

describe('JokesService', () => {
  let jokesService: JokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [JokesService]
    });
  });

  beforeEach(inject([
    JokesService
  ], (_jokesService: JokesService) => {
    jokesService = _jokesService;
  }));

  it('should be created', inject([JokesService], (service: JokesService) => {
    expect(service).toBeTruthy();
  }));

  describe('getList', () => {

    it('should return the list of news', fakeAsync(() => {
      // Act
      const request = jokesService.getList('test');
      tick();

      // Assert
      request.subscribe(data => {
        expect(data).toBeDefined();
        expect(data['result']).toBeDefined();
      });
    }));
  });
});
