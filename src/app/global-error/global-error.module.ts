import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalErrorInterceptor } from './global-error.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

@NgModule({
  imports: [
  StoreModule.forFeature('errors', reducers),
  EffectsModule.forFeature(effects),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: GlobalErrorInterceptor, multi: true },
  ],
})
export class GlobalErrorModule { }

// StoreModule.forFeature('errors', reducers),
// EffectsModule.forFeature(effects),