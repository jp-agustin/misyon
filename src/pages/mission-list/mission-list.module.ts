import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MissionList } from './mission-list';

@NgModule({
  declarations: [
    MissionList,
  ],
  imports: [
    IonicPageModule.forChild(MissionList),
  ],
  exports: [
    MissionList
  ]
})
export class MissionListModule {}
