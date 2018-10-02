import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Hero } from '../models/heroes';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroData: any;
  dataLoaded: boolean;
  errorMessage: string;
  heroesLoading: boolean;

  constructor(private heroesService: HeroesService, private router: Router,
    private store: Store<fromStore.HeroSummaryState>) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadHeroes);
    this.store.pipe(select(fromStore.getHeroes))
      .subscribe(heroes => this.heroData = new Hero(heroes)
      .getHeroList(), err => console.log(err));
    this.store.pipe(select(fromStore.getHeroesLoading)).subscribe(loading => this.heroesLoading = loading);
  }

  getHeroImgUrl(imagePath) {
    return `https://api.opendota.com${imagePath}`;
  }
}
