import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartPerson } from './chart-person';

@NgModule({
  declarations: [
    ChartPerson,
  ],
  imports: [
    IonicPageModule.forChild(ChartPerson),
  ],
  exports: [
    ChartPerson
  ]
})
export class ChartPersonModule {}
