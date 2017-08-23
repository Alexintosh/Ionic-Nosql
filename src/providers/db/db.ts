import { Person } from './../../person/person';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/Storage';

declare var require: any;
const loki = require('lokijs');
const DB_NAME = "newGigv001.db";
const COWORKER_COLLECTION = "coworkers";

@Injectable()
export class DbProvider {

  db:any;
  coworkers: any;
  ready: Promise<any>;

  constructor(private storage: Storage) {    
    this.db = new loki(DB_NAME);
    
    this.ready = new Promise((resolve, reject) => {
      this.importOrCreate().then((res) => {

        let intervalId = setInterval(() => {
          this.persist();
        }, 100);

        return resolve(res.data);
      });        
    })    
  }

  public fetchCoworker(){
    return this.ready;
  }

  private persist() {
      this.storage.set(DB_NAME, JSON.stringify(this.db) );
  }

  private importOrCreate() {
    return this.storage.ready().then( () => {      
      return this.storage.get(DB_NAME).then((stored) => {
        
        if (!stored) {
          this.coworkers = this.db.addCollection(COWORKER_COLLECTION);
          const temp = new Person();
          temp.name = "test name";
          temp.surname = "test surname";
          temp.role = "dev";
          this.coworkers.insert(temp);
          this.persist();
          
        } else {
          this.db.loadJSON(stored);
          this.coworkers = this.db.getCollection(COWORKER_COLLECTION);
        }

        return this.coworkers;
      });
    });
  }

}
