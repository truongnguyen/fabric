import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FabricButtonModule } from './button';
import { FabricNavModule } from './nav';

@NgModule({
  imports: [
    BrowserModule,
    FabricButtonModule,
    FabricNavModule
  ],
  exports: [
    FabricButtonModule,
    FabricNavModule
  ],
  providers: []
})
export class FabricCoreModule { }
