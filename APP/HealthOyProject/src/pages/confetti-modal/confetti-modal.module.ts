import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfettiModalPage } from './confetti-modal';

@NgModule({
  declarations: [
    ConfettiModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfettiModalPage),
  ],
})
export class ConfettiModalPageModule {}
