import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkoutSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workout-selection',
  templateUrl: 'workout-selection.html',
})
export class WorkoutSelectionPage {
  workout: any;
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.workout = navParams.get('workout') || 5;
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutSelectionPage');
  }

}
