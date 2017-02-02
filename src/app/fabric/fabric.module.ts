import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FabricBreadcrumb }   from './breadcrumb/';
import { FabricButton, FabricIconButton, FabricPrimaryButton, FabricHeroButton, FabricCompoundButton, FabricCommandButton } from './button/'
import { FabricCheckbox } from './checkbox/';
import { FabricChoiceGroup, FabricChoiceOption } from './choice-group/';
import { FabricCallout } from './callout';
import { FabricCommandBar } from './command-bar/';
import { FabricContextMenu } from './context-menu/';
import { FabricIcon } from './icon/';
import { FabricImage } from './image/';
import { FabricLabel } from './label';
import { FabricLayer } from './layer/';
import { FabricNav, FabricNavLink, FabricNavGroup } from './nav';

const FABRIC_COMPONENTS = [
  FabricBreadcrumb,
  FabricButton, FabricIconButton, FabricPrimaryButton, FabricHeroButton, FabricCompoundButton, FabricCommandButton,
  FabricCheckbox,
  FabricChoiceGroup, FabricChoiceOption,
  FabricCallout,
  FabricCommandBar,
  FabricContextMenu,
  FabricIcon,
  FabricImage,
  FabricLabel,
  FabricLayer,
  FabricNav, FabricNavLink, FabricNavGroup
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [ FABRIC_COMPONENTS ],
  exports: [ FABRIC_COMPONENTS ],
  providers: [],
})
export class FabricModule { }
