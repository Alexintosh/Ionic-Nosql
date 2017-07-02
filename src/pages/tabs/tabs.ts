import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Coworkers } from '../coworkers/coworkers';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Coworkers;

  constructor() {

  }
}
