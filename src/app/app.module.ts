import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FabricCoreModule } from '../platform/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FabricCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
