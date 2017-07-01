import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Coworkers } from './coworkers';

@NgModule({
  declarations: [
    Coworkers,
  ],
  imports: [
    IonicPageModule.forChild(Coworkers),
  ],
  exports: [
    Coworkers
  ]
})
export class CoworkersModule {}
