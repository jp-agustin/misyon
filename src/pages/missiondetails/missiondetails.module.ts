import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Missiondetails } from './missiondetails';

@NgModule({
  declarations: [
    Missiondetails,
  ],
  imports: [
    IonicPageModule.forChild(Missiondetails),
  ],
  exports: [
    Missiondetails
  ]
})
export class MissiondetailsModule {}
