import { Component } from '@angular/core';

/**
 * Generated class for the AboutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'about',
  templateUrl: 'about.html'
})
export class AboutComponent {

  text: string;

  constructor() {
    console.log('Hello AboutComponent Component');
    this.text = 'Hello World';
  }

}
