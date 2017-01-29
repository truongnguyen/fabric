import { Component, ContentChildren, Input, QueryList, OnInit, ViewEncapsulation } from '@angular/core';

import { FabricChoiceOption } from './choice-group-option.component';
@Component({
    selector: 'fabric-choice-group',
    styleUrls: ['choice-group.component.scss'],
    templateUrl: 'choice-group.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FabricChoiceGroup implements OnInit {
    @ContentChildren(FabricChoiceOption) options: QueryList<FabricChoiceOption>;
    @Input() name: string;

    constructor() { }

    ngOnInit() { }
}