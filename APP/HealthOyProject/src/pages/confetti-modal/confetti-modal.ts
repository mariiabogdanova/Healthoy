import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
/**
 * Generated class for the ConfettiModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confetti-modal',
  templateUrl: 'confetti-modal.html',
})
export class ConfettiModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfettiModalPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
