import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../framework/material/material.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { HeroTileComponent } from './heroes/hero-tile/hero-tile.component';

@NgModule({
  declarations: [
    AppComponent,
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// To Do:
// Add Tests
// Add Ngrx Store
// Make own style library instead of using materials
