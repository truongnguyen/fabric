import {  ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fabric-layer',
  templateUrl: 'layer.component.html',
  styleUrls: [ 'layer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FabricLayer implements OnInit {
  constructor() { }

  ngOnInit() { }
}