import { AddPerson } from './add-person/add-person';
import { Person } from './../../person/person';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


/**
 * Generated class for the Coworkers page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-coworkers',
  templateUrl: 'coworkers.html',
})
export class Coworkers {
  people: Person[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.people = [];
  }

  presentProfileModal() {
   const profileModal = this.modalCtrl.create(AddPerson);
   profileModal.present();
   profileModal.onDidDismiss( person => this.add(person) );
 }

  ionViewDidLoad() {
  }

  add(person){
    if(person) this.people.push(person);
  }

}
