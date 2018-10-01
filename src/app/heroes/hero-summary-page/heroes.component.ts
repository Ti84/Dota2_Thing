import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Hero } from '../models/heroes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroData: any;
  dataLoaded: boolean;
  errorMessage: string;
  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.getHeroData();
  }

  getHeroData() {
    this.dataLoaded = false;
    this.errorMessage = '';
    this.heroesService.getHeroInfo().subscribe((heroes: any) => {
      this.dataLoaded = true;
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
