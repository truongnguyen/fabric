import { Component, Directive, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Directive({
  selector: 'fabric-nav-link',
})
export class FabricNavLink {
  @Input() name: string;
  @Input() selected: boolean = false;
  @Input() routerLink: RouterLink;
}
