import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html',
})
export class WorkoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutPage');
  }
  openItem(workout: any) {
    this.navCtrl.push('WorkoutSelectionPage', {
      workout: workout
    });
  }
}
