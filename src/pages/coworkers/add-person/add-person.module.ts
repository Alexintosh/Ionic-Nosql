import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AddPerson } from './add-person';

@NgModule({
  declarations: [
    AddPerson,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    AddPerson
  ]
})
export class AddPersonModule {}
