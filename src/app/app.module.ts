import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../framework/material/material.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from './reducers';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeroesModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// To Do:
// Add Tests
// Add Ngrx Store
// Make own style library instead of using materials
// Prettier setup
// Linter setup
