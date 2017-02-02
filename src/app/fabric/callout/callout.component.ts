import {  ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fabric-callout',
  templateUrl: 'callout.component.html',
  styleUrls: [ 'callout.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FabricCallout implements OnInit {
  constructor() { }

  ngOnInit() { }
}