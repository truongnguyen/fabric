import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FabricButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    FabricButtonComponent
  ],
  exports: [FabricButtonComponent],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class FabricCoreModule { }
