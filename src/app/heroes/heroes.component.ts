import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroData: any;
  dataLoaded: boolean;
  errorMessage: string;
  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.getHeroData();
  }

  getHeroData() {
    this.dataLoaded = false;
    this.errorMessage = '';
    this.heroesService.getHeroInfo().subscribe((heroes: any) => {
      this.dataLoaded = true;
      this.heroData = heroes;
    }, error => { 
      this.dataLoaded = true;
      this.errorMessage = error
    });
  }
  
  getHeroImgUrl(rawHeroName) {
    let urlHeroName = rawHeroName.replace('npc_dota_hero_', '');
    return `http://cdn.dota2.com/apps/dota2/images/heroes/${urlHeroName}_lg.png`
  }
}
