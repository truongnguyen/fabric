import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoButtonComponent } from './components/';

const routes: Routes = [
  { path: '', redirectTo: '/button', pathMatch: 'full' },
  { path: 'button',  component: DemoButtonComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
