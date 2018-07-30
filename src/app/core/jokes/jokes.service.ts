import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http: HttpClient) { }

  getList(search: string) {
    return this.http.get(`/jokes/search?query=${search}`)
  }
}
