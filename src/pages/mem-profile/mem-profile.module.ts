import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemProfile } from './mem-profile';

@NgModule({
  declarations: [
    MemProfile,
  ],
  imports: [
    IonicPageModule.forChild(MemProfile),
  ],
  exports: [
    MemProfile
  ]
})
export class MemProfileModule {}
