import { Component, ContentChildren, EventEmitter, Input, QueryList, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { FabricNavGroup } from './nav-group.directive';
import { FabricNavLink } from './nav-link.directive';

@Component({
    selector: 'fabric-nav',
    styleUrls: [ 'nav.component.scss' ],
    templateUrl: 'nav.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FabricNav implements OnInit {
    @ContentChildren(FabricNavGroup) groups: QueryList<FabricNavGroup>;
    @Input() selectedLink: FabricNavLink;
    @Output() select: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() { }

    toggle(group: FabricNavGroup): void {
        group.expanded = !group.expanded;
    }

    route(group: FabricNavGroup, link: FabricNavLink): void {
        this.groups.forEach(g => 
            g.links.forEach(l => l.selected = false)
        );

        link.selected = true;

        this.select.emit(link);
    }
}