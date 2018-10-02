import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { MaterialModule } from '../../framework/material/material.module';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [SpinnerComponent]
})
export class ComponentsModule { }
