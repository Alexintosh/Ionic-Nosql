import { DbProvider } from './../../providers/db/db';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public db: DbProvider) {        
  }

  ionViewDidLoad() {
    this.fetchCoworkers();
  }

  fetchCoworkers(){
    this.db.fetchCoworker().then( (coworkers) =>{
      this.people = coworkers;
    });
  }

  presentProfileModal() {
    const profileModal = this.modalCtrl.create(AddPerson);
    profileModal.onDidDismiss(person => this.add(person));
    profileModal.present();
  }

  add(person) {
    if (person) {
      this.db.coworkers.insert(person);
    }
  }

  rm(person) {
    if (person) {
      this.db.coworkers.remove(person);
    }
  }

  getItems(ev: any) {
    // Reset items back to all of the items

    // set val to the value of the searchbar
    let val = ev.target.value;
    console.log(val);
    this.people = this.db.coworkers.find({
      '$or': [
        {'name': { '$regex': new RegExp(val, 'i')  } }, 
        {'surname': { '$regex': new RegExp(val, 'i') } },
      ],      
    });

    
  }

}
