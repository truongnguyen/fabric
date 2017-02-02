import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  ButtonDemoComponent,
          BreadcrumbDemoComponent,
          CalloutDemoComponent,
          CheckboxDemoComponent,
          ChoiceGroupDemoComponent,
          CommandBarDemoComponent,
          ContextMenuDemoComponent,
          NavDemoComponent,
          LabelDemoComponent } from './demo/';

const routes: Routes = [
  { path: '', redirectTo: '/button', pathMatch: 'full' },
  { path: 'button',  component: ButtonDemoComponent },
  { path: 'breadcrumb',  component: BreadcrumbDemoComponent },
  { path: 'callout',  component: CalloutDemoComponent },
  { path: 'checkbox',  component: CheckboxDemoComponent },
  { path: 'choice-group',  component: ChoiceGroupDemoComponent },
  { path: 'command-bar',  component: CommandBarDemoComponent },
  { path: 'context-menu',  component: ContextMenuDemoComponent },
  { path: 'label',  component: LabelDemoComponent },
  { path: 'nav',  component: NavDemoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
