import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FabricNavComponent} from './nav.component';
import { FabricNavGroupDirective } from './nav-group.directive';
import { FabricNavLinkDirective } from './nav-link.directive';

const FABRIC_NAV: Type<any>[] = [
  FabricNavComponent,
  FabricNavGroupDirective,
  FabricNavLinkDirective
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ FABRIC_NAV ],
  exports: [ FABRIC_NAV ],
})
export class FabricNavModule {

}
