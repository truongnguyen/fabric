import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
  size = 'xxLarge';

  mystates(value: string) {
    console.log(value);

    switch(value){
      case 'xl':
        this.size = 'xxLarge';
      case 'lg': 
        this.size = 'xLarge';
        break;
      case 'md':
        this.size = 'large';
        break;
      case 'sm':
        this.size = 'medium';
      case 'xs':
        this.size = 'small'
    }
  }


}
