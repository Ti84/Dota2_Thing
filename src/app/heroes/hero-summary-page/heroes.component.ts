import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Hero } from '../models/heroes';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from '../store'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroData: any;
  dataLoaded: boolean;
  errorMessage: string;
  constructor(private heroesService: HeroesService, private router: Router,
      private store: Store<fromStore.HeroSummaryState>) { }

  ngOnInit() {
    this.getHeroData();
    this.store.dispatch(new fromStore.LoadHeroes);
  }

  // $ sign is a good way to not observables on variable names.
  getHeroData() {
    this.dataLoaded = false;
    this.errorMessage = '';
    this.heroesService.getHeroInfo().subscribe((heroes: any) => {
      this.heroData = new Hero(heroes).getHeroList();
    }, error => { 
      this.dataLoaded = true;
      this.errorMessage = error
    });
  }
  
  getHeroImgUrl(imagePath) {
    return `https://api.opendota.com${imagePath}`;
  }
}
