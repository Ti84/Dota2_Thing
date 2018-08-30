import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroUrl = 'https://api.opendota.com/api/heroes';
  constructor(private http: HttpClient) { }

  getHeroInfo() {
    return this.http.get(this.heroUrl);
  }
}
