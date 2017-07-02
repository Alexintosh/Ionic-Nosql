import { AddPersonModule } from './../add-person/add-person.module';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AddButton } from './add-button';

@NgModule({
  declarations: [
    AddButton,
  ],
  imports: [
    IonicModule
  ],
  exports: [
    AddButton
  ]
})
export class AddButtonModule {}
