import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fabric-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FabricButtonComponent {
  title = 'app';
}
