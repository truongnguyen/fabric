import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FabricCoreModule } from '../../platform/core';

import { DemoButtonComponent } from './button/button.component';

const DEMO_COMPONENTS = [
  DemoButtonComponent
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FabricCoreModule
  ],
  exports: [ DEMO_COMPONENTS ],
  declarations: [ DEMO_COMPONENTS ],
  entryComponents: [ DEMO_COMPONENTS ],
  providers: [],
})
export class DemoComponentsModule { }
