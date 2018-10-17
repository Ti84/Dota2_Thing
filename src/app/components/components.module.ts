import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { MaterialModule } from '../../framework/material/material.module';
import { ToastComponent } from './toast/toast.component';
import { reducers } from './store';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    SpinnerComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('messages', reducers),
  ],
  exports: [SpinnerComponent, ToastComponent]
})
export class ComponentsModule { }
