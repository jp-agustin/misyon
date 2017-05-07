import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ongoing } from './ongoing';

@NgModule({
  declarations: [
    Ongoing,
  ],
  imports: [
    IonicPageModule.forChild(Ongoing),
  ],
  exports: [
    Ongoing
  ]
})
export class OngoingModule {}
