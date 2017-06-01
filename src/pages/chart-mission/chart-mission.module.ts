import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartMission } from './chart-mission';

@NgModule({
  declarations: [
    ChartMission,
  ],
  imports: [
    IonicPageModule.forChild(ChartMission),
  ],
  exports: [
    ChartMission
  ]
})
export class ChartMissionModule {}
