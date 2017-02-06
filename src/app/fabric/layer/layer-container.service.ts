import { Injectable, Renderer } from '@angular/core';

@Injectable()
export class FabricLayerContainer {
  protected containerElement: HTMLElement;

  constructor(private renderer: Renderer) { }

  getContainerElement(): HTMLElement {
    if(!this.containerElement) {
      this.createContainer();
    }

    return this.containerElement;
  }

  protected createContainer(): void {
    let container = document.createElement('div');
    this.renderer.setElementClass(container, 'ms-Layer ms-Layer--fixed', true);
    //container.classList.add('ms-Layer ms-Layer--fixed');
    document.body.appendChild(container);

    this.containerElement = container;
  }
}