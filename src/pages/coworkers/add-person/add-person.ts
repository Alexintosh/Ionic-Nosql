import { Person } from './../../../person/person';
import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";

/**
 * Generated class for the AddPerson component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'add-person',
  templateUrl: 'add-person.html'
})
export class AddPerson {

  newPerson: Person;

  constructor(public viewCtrl: ViewController) {
  }

  dismiss() {
   this.viewCtrl.dismiss(this.newPerson);
 }

}
