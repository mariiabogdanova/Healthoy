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
 modalGifs:any=["assets/img/dog_confetti.gif",
	"assets/img/hellya_confetti.gif",
	"assets/img/confetti.gif",
	"assets/img/fuck_confetti.gif",
	"assets/img/yass_confetti.gif"] ;
	;
myRand: number;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

ionViewDidEnter() {
   this.myRand=this.random();
  }
 random(): number {
   let rand = Math.floor(Math.random()* this.modalGifs.length);
   return rand;       
}
  gifSelector()
 {
 	this.modalGifs = ["assets/img/dog_confetti.gif",
	"assets/img/hellya_confetti.gif",
	"assets/img/confetti.gif",
	"assets/img/fuck_confetti.gif",
	"assets/img/yass_confetti.gif"] ;
	
	let randGif= this.modalGifs[Math.floor(Math.random() * this.modalGifs.length)];
	return randGif.toString() ; 
 }
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfettiModalPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
