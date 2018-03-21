import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutSelectionPage } from './workout-selection';

@NgModule({
  declarations: [
    WorkoutSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutSelectionPage),
  ],
})
export class WorkoutSelectionPageModule {}
