import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'checkbox-demo',
  templateUrl: 'checkbox-demo.component.html'
})
export class CheckboxDemoComponent implements OnInit {
  agree: boolean = false;
  isChecked: boolean = true;

  constructor() { }

  ngOnInit() { }

  onChange(event) {
    console.log(event);
  }
}