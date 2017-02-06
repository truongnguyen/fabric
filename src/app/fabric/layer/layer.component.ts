import {  ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FabricLayerContainer } from './layer-container.service';

/** Next overlay unique ID. */
let nextUniqueId = 0;

@Component({
  selector: 'fabric-layer',
  templateUrl: 'layer.component.html',
  styleUrls: [ 'layer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FabricLayer implements OnInit {
  constructor(private layerContainer: FabricLayerContainer) { }

  ngOnInit() {
    this.create();
  }

  create(): void {
    this.createPaneElement();
  }

  private createPaneElement(): HTMLElement {
    let pane = document.createElement('div');
    pane.id = `fabric-layer-${ nextUniqueId++ }`;
    
    this.layerContainer.getContainerElement().appendChild(pane);

    return pane;
  }
}