import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Updates } from './updates';

@NgModule({
  declarations: [
    Updates,
  ],
  imports: [
    IonicPageModule.forChild(Updates),
  ],
  exports: [
    Updates
  ]
})
export class UpdatesModule {}
