import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AddButton } from './add-button';

@NgModule({
  declarations: [
    AddButton,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    AddButton
  ]
})
export class AddButtonModule {}
