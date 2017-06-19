import { Component, ContentChildren, Directive, QueryList, Input } from '@angular/core';

import { FabricNavLinkDirective } from './nav-link.directive';

@Directive({
    selector: 'fabric-nav-group',
})
export class FabricNavGroupDirective {
    @Input() expanded = false;
    @ContentChildren(FabricNavLinkDirective) links: QueryList<FabricNavLinkDirective>;
    @Input() name: string;
}
