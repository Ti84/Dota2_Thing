import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroesService.getHeroInfo().subscribe((data) => console.log(data), error => console.log(error));
  }

}
