import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FabricButtonComponent,
  FabricCompoundButtonComponent,
  FabricCommandButtonComponent,
  FabricHeroButtonComponent,
  FabricIconButtonComponent,
  FabricPrimaryButtonComponent } from './button.component';

const FABRIC_BUTTON: Type<any>[] = [
  FabricButtonComponent,
  FabricCommandButtonComponent,
  FabricCompoundButtonComponent,
  FabricHeroButtonComponent,
  FabricIconButtonComponent,
  FabricPrimaryButtonComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ FABRIC_BUTTON ],
  exports: [ FABRIC_BUTTON ],
})
export class FabricButtonModule {

}
