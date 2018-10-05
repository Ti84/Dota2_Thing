import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { HeroObject } from '../models/heroes';

@Component({
  selector: 'app-hero-detail-page',
  templateUrl: './hero-detail-page.component.html',
  styleUrls: ['./hero-detail-page.component.scss']
})
export class HeroDetailPageComponent implements OnInit {

  heroDetails: HeroObject;
  constructor(private store: Store<fromStore.HeroSummaryState>) {}

  ngOnInit() {
    this.store.select(fromStore.getSelectedHero).subscribe((hero: HeroObject) => {
      this.heroDetails = hero;
    });
  }

  getHeroImgUrl(imagePath) {
    return `https://api.opendota.com${imagePath}`;
  }

}
