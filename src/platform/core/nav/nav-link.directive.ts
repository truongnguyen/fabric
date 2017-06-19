import { Component, Directive, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Directive({
  selector: 'fabric-nav-link',
})
export class FabricNavLinkDirective {
  @Input() name: string;
  @Input() selected = false;
  @Input() routerLink: RouterLink;
}
