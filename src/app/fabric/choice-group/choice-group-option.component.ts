import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fabric-choice-option',
  templateUrl: 'choice-group-option.component.html'
})
export class FabricChoiceOption implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() { }
}