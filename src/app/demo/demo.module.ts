import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FabricModule } from '../fabric/';

import { ButtonDemoComponent } from './button/';
import { BreadcrumbDemoComponent } from './breadcrumb/';
import { CheckboxDemoComponent } from './checkbox/'
import { ChoiceGroupDemoComponent } from './choice-group/';
import { LabelDemoComponent } from './label/';
import { NavDemoComponent } from './nav/';

const DEMO_COMPONENTS = [
  ButtonDemoComponent,
  BreadcrumbDemoComponent,
  CheckboxDemoComponent,
  ChoiceGroupDemoComponent,
  LabelDemoComponent,
  NavDemoComponent
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FabricModule
  ],
  exports: [ DEMO_COMPONENTS ],
  declarations: [ DEMO_COMPONENTS ],
  providers: [],
})
export class DemoModule { }
