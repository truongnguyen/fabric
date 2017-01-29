import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'fabric-label',
    styleUrls: [ 'label.component.scss' ],
    templateUrl: 'label.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FabricLabel implements OnInit {
    @Input() required: boolean = false;
    @Input() disabled: boolean = false;

    constructor() { }

    ngOnInit() { }
}