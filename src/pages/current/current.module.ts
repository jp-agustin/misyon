import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Current } from './current';

@NgModule({
  declarations: [
    Current,
  ],
  imports: [
    IonicPageModule.forChild(Current),
  ],
  exports: [
    Current
  ]
})
export class CurrentModule {}
