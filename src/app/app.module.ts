import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../framework/material/material.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CustomSerializer, reducers, metaReducers } from './store';
import { HeroesModule } from './heroes/heroes.module';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer } from '@ngrx/router-store';

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
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([])
  ],
  // Registering RouterStateSerializer but using our Custom serializer.
  providers: [{provide: RouterStateSerializer, useClass: CustomSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule { }

// To Do:
// Route Guards (Data verification)
// Add Tests
// Add Ngrx Store (SO MUCH BOILERPLATE M8)
// Make own style library instead of using materials
// Prettier setup
// Linter setup
// Error service (Also, handle errors in services!)
// Connect https://github.com/zalmoxisus/redux-devtools-extension#usage to this app! (Makes state monitoring easier)

// Good reference! https://github.com/UltimateAngular/ngrx-store-effects-app (Has route guards and such).
// Also, this app's started from this course!)
