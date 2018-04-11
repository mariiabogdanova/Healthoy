import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import {confetti_modal} from '../pages' ;

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
  vid_Data: Observable<any>;
  display_data:any=[];
  done_video:any=[];
  done_data:any;
  DONE_COLLECTION:any=[];
  video: any = {
    url: 'https://www.youtube.com/embed/MLleDRkSuvk',
    title: 'Awesome video'
};
trustedVideoUrl: SafeResourceUrl;
  constructor(public navCtrl: NavController, public navParams: NavParams,private domSanitizer: DomSanitizer,public httpClient: HttpClient,private storage: Storage, public modalCtrl: ModalController ) {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    this.workout = navParams.get('workout') ;
    let params = new HttpParams();
    params = params.append('cat', this.workout);
    this.vid_Data = this.httpClient.get('http://101bits.com/blog/healthoy/get_video1.php',{params});
    this.vid_Data
    .subscribe(data => {
      console.log(this.vid_Data);
      this.display_data=data.DATA;
      console.log('my data: ',this.display_data);
    });
   // this.storage.set('DONE',this.done_video);
    storage.get('DONE1').then((val) => {
      console.log('done', val);
      this.done_video=val;
    });
    storage.get('DONE_DATA1').then((val) => {
      console.log('done', val);
      this.DONE_COLLECTION=val;
     
    });
  }
  hack(val) {
    return Array.from(val);
  }
  trusturl(val){
    var trusted=this.domSanitizer.bypassSecurityTrustResourceUrl(val)
    return(trusted);
  }

  checkdone(val){
if(!this.done_video){
  return 1;
}else{
  var is_done = this.done_video.indexOf(val);
  return is_done;
}
  
  }
test(){
  console.log("asdfasfda");
}
videoclicked(video){
  console.log(video);
 
if(!this.done_video){
 this.done_video=[];
 }
 if(!this.DONE_COLLECTION){
  this.DONE_COLLECTION=[];
  }
 
 


  this.done_video.push(video.id);
this.done_data={
  id:video.id,
  video_title:video.video_title,
created:new Date()
}


 this.DONE_COLLECTION.push(this.done_data);
 this.storage.set('DONE_DATA1',this.DONE_COLLECTION);



 this.storage.get('DONE_DATA1').then((val) => {
  console.log('done', val);

});



  this.storage.set('DONE1',this.done_video);
  console.log("video is clicked"+this.done_video);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutSelectionPage');
    this.test();

    
  }
  openModal() {
    let myModal = this.modalCtrl.create(confetti_modal);
    myModal.present();
  }

}
