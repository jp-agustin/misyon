import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrgList } from './org-list';

@NgModule({
  declarations: [
    OrgList,
  ],
  imports: [
    IonicPageModule.forChild(OrgList),
  ],
  exports: [
    OrgList
  ]
})
export class OrgListModule {}
