import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolunteerHome } from './volunteer-home';

@NgModule({
  declarations: [
    VolunteerHome,
  ],
  imports: [
    IonicPageModule.forChild(VolunteerHome),
  ],
  exports: [
    VolunteerHome
  ]
})
export class VolunteerHomeModule {}
