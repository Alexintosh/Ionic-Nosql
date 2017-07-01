import { Component } from '@angular/core';

/**
 * Generated class for the AddButton component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'add-button',
  templateUrl: 'add-button.html'
})
export class AddButton {

  text: string;

  constructor() {
    console.log('Hello AddButton Component');
    this.text = 'Hello World';
  }

}
