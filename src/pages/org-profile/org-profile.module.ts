import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrgProfile } from './org-profile';

@NgModule({
  declarations: [
    OrgProfile,
  ],
  imports: [
    IonicPageModule.forChild(OrgProfile),
  ],
  exports: [
    OrgProfile
  ]
})
export class OrgProfileModule {}
