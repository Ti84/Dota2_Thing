import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-tile',
  templateUrl: './hero-tile.component.html',
  styleUrls: ['./hero-tile.component.scss']
})
export class HeroTileComponent implements OnInit {
  @Input()
  heroImageUrl: string;

  @Input()
  LocalizedHeroName: string;
  constructor() { }

  ngOnInit() {}

}
