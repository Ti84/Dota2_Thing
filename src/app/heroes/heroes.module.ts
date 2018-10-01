import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './hero-summary-page/heroes.component';
import { HomeComponent } from '../home/home.component';
import { HeroTileComponent } from './hero-tile/hero-tile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../framework/material/material.module';
import { reducers } from './store';
import { heroRoutes } from './heroes-routes.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    HeroesComponent,
    HomeComponent,
    HeroesComponent,
    HeroTileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild(heroRoutes),
    StoreModule.forFeature('heroes', reducers)
  ]
})
export class HeroesModule { }