import { Component, Input, ViewEncapsulation } from '@angular/core';

export enum ButtonType {
  Command = <any>'command',
  Compound = <any>'compound',
  Hero = <any>'hero',
  Icon = <any>'icon',
  Normal = <any>'normal',
  Primary = <any>'primary'
}

// Normal Button
@Component({
  selector: 'fabric-button',
  styleUrls: ['button.component.scss'],
  templateUrl: 'button.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FabricButton {
  @Input() buttonType: any = ButtonType.Normal;
  @Input() class: string;
  @Input() disabled: boolean = false;
  @Input() ariaDescription: string;
}

// Primary Button
@Component({
  selector: 'fabric-primary-button',
  styleUrls: ['button.component.scss'],
  templateUrl: 'button.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FabricPrimaryButton extends FabricButton {
  @Input() buttonType: any = ButtonType.Primary;
}

// Hero Button
@Component({
  selector: 'fabric-hero-button',
  styleUrls: ['button.component.scss'],
  templateUrl: 'button.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FabricHeroButton extends FabricButton{
  @Input() buttonType: any = ButtonType.Hero;
  @Input() icon: string;
}

// Compound Button
@Component({
  selector: 'fabric-compound-button',
  styleUrls: ['button.component.scss'],
  templateUrl: 'button.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FabricCompoundButton extends FabricButton{
  @Input() buttonType: any = ButtonType.Compound;
  @Input() description: string;
}

// Command Button
@Component({
  selector: 'fabric-command-button',
  styleUrls: ['button.component.scss'],
  templateUrl: 'button.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FabricCommandButton extends FabricButton{
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
export class FabricIconButton extends FabricButton{
  @Input() buttonType: any = ButtonType.Icon;
  @Input() icon: string;
}