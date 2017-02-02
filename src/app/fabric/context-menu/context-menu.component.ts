import {  ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fabric-context-menu',
  templateUrl: 'context-menu.component.html',
  styleUrls: [ 'context-menu.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FabricContextMenu implements OnInit {
  constructor() { }

  ngOnInit() { }
}