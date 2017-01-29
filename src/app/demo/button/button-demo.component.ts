import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-demo',
  templateUrl: 'button-demo.component.html'
})
export class ButtonDemoComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  onClick(event): void {
    alert('click');
  }
}