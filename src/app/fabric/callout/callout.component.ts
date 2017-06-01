import {  AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, Renderer, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FabricLayerContainer } from '../layer/layer-container.service';

@Component({
  selector: 'fabric-callout',
  templateUrl: 'callout.component.html',
  styleUrls: [ 'callout.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FabricCallout implements OnInit, AfterViewInit {
  @Input() containerElement: HTMLElement;
  @Input() target: HTMLElement | MouseEvent;

  constructor(private renderer: Renderer, private viewContainer: ViewContainerRef, private layerContainer: FabricLayerContainer) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let el = this.viewContainer.element.nativeElement;

    let pane = document.createElement('div');
    // pane.id = `fabric-layer-1`;

    // el.appendChild(pane);

    this.layerContainer.getContainerElement().appendChild(pane);

    // this.createContainer();
  }

  private createContainer(): void {
    let container = document.createElement('div');
    // this.renderer.setElementClass(container, 'ms-Layer ms-Layer--fixed', true);
    //container.classList.add('ms-Layer ms-Layer--fixed');

    document.body.appendChild(container);

    this.containerElement = container;
  }
}