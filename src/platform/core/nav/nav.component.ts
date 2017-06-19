import { Component, ContentChildren, EventEmitter, Input, QueryList, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { FabricNavGroupDirective } from './nav-group.directive';
import { FabricNavLinkDirective } from './nav-link.directive';

@Component({
    selector: 'fabric-nav',
    styleUrls: [ 'nav.component.scss' ],
    templateUrl: 'nav.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FabricNavComponent implements OnInit {
    @ContentChildren(FabricNavGroupDirective) groups: QueryList<FabricNavGroupDirective>;
    @Input() selectedLink: FabricNavLinkDirective;
    @Output() select: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() { }

    toggle(group: FabricNavGroupDirective): void {
        group.expanded = !group.expanded;
    }

    route(group: FabricNavGroupDirective, link: FabricNavLinkDirective): void {
        this.groups.forEach(g =>
            g.links.forEach(l => l.selected = false)
        );

        link.selected = true;

        this.select.emit(link);
    }
}
