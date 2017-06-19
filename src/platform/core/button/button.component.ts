import { Component, Input, ViewEncapsulation } from '@angular/core';

export enum ButtonType {
  Command = <any>'command',
  Compound = <any>'compound',
  Hero = <any>'hero',
  Icon = <any>'icon',
  Normal = <any>'normal',
  Primary = <any>'primary'
}

// Button
@Component({
  selector: 'fabric-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FabricButtonComponent {
  @Input() buttonType: ButtonType = ButtonType.Normal;
  @Input() class: string;
  @Input() disabled = false;
  @Input() ariaDescription: string;
}

// Primary Button
@Component({
  selector: 'fabric-primary-button',
  styleUrls: ['button.component.scss'],
  templateUrl: 'button.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FabricPrimaryButtonComponent extends FabricButtonComponent {
  @Input() buttonType: any = ButtonType.Primary;
}

// Hero Button
@Component({
  selector: 'fabric-hero-button',
  styleUrls: ['button.component.scss'],
  templateUrl: 'button.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FabricHeroButtonComponent extends FabricButtonComponent {
  @Input() buttonType: any = ButtonType.Hero;
  @Input() icon: string;
}

// Compound Button
@Component({
  selector: 'fabric-compound-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FabricCompoundButtonComponent extends FabricButtonComponent {
   @Input() buttonType: ButtonType = ButtonType.Compound;
  @Input() description: string;
}

// Command Button
@Component({
  selector: 'fabric-command-button',
  styleUrls: ['button.component.scss'],
  templateUrl: 'button.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FabricCommandButtonComponent extends FabricButtonComponent{
  @Input() buttonType: any = ButtonType.Command;
  @Input() icon: string;
}

// Icon Button
@Component({
  selector: 'fabric-icon-button',
  styleUrls: ['button.component.scss'],
  templateUrl: 'button.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FabricIconButtonComponent extends FabricButtonComponent{
  @Input() buttonType: any = ButtonType.Icon;
  @Input() icon: string;
}
