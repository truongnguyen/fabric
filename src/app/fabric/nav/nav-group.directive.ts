import { Component, ContentChildren, Directive, QueryList, Input } from '@angular/core';

import { FabricNavLink } from './nav-link.directive';

@Directive({
    selector: 'fabric-nav-group',
})
export class FabricNavGroup {
    @Input() expanded: boolean = false;
    @ContentChildren(FabricNavLink) links: QueryList<FabricNavLink>;
    @Input() name: string;
}
