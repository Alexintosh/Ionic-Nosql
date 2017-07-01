import { Component } from '@angular/core';

import { Coworkers } from '../coworkers/coworkers';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Coworkers;

  constructor() {

  }
}
