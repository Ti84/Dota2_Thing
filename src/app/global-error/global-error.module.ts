import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalErrorInterceptor } from './global-error.service';

@NgModule({
  imports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: GlobalErrorInterceptor, multi: true }
  ],
})
export class GlobalErrorModule { }
