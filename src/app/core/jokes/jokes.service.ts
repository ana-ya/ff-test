import { Injectable } from '@angular/core';
// import { HttpClient } from '../../../../node_modules/@types/selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http: HttpClient) { }

  getList(search: string) {
    return this.http.get(`/jokes/search?query=${search}`)
    // .subscribe((data) => {
    //   console.log(data);
    //   // Assert
    //   // const cachedData = httpCacheService.getCacheData('/toto');
    //   // expect(cachedData).toBeDefined();
    //   // expect(cachedData ? cachedData.body : null).toEqual('someData');
    // });

  }
}
