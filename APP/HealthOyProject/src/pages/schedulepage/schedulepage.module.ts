import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchedulepagePage } from './schedulepage';


@NgModule({
  declarations: [
    SchedulepagePage,
  ],
  imports: [
    IonicPageModule.forChild(SchedulepagePage),
    ChartModule.forRoot(HighCharts)
    
  ],
})
export class SchedulepagePageModule {}
