import { AddPersonModule } from './add-person/add-person.module';
import { AddButtonModule } from './add-button/add-button.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Coworkers } from './coworkers';

@NgModule({
  declarations: [
    Coworkers,
  ],
  imports: [
    IonicPageModule.forChild(Coworkers),
    AddButtonModule
  ],
  exports: [
    Coworkers
  ]
})
export class CoworkersModule {}
