import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResponsiveModule, ResponsiveConfig, ResponsiveConfigInterface } from 'ng2-responsive';

import { FabricCoreModule } from '../platform/core';
import { AppRoutingModule } from './app-routing.module';
import { DemoComponentsModule } from './components/'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

let config: ResponsiveConfigInterface = {
  breakPoints: {
    xs: { max: 600 },
    sm: { min: 601, max: 959 },
    md: { min: 960, max: 1279 },
    lg: { min: 1280, max: 1919 },
    xl: { min: 1920 }
  },
  debounceTime: 100 // allow to debounce checking timer
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DemoComponentsModule,
    FabricCoreModule,
    ResponsiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
