import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeadProfile } from './head-profile';

@NgModule({
  declarations: [
    HeadProfile,
  ],
  imports: [
    IonicPageModule.forChild(HeadProfile),
  ],
  exports: [
    HeadProfile
  ]
})
export class HeadProfileModule {}
