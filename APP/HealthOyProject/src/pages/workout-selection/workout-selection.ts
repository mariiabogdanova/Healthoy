import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpParams } from '@angular/common/http';

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
  video: any = {
    url: 'https://www.youtube.com/embed/MLleDRkSuvk',
    title: 'Awesome video'
};
trustedVideoUrl: SafeResourceUrl;
  constructor(public navCtrl: NavController, public navParams: NavParams,private domSanitizer: DomSanitizer,public httpClient: HttpClient) {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    this.workout = navParams.get('workout') ;


    let params = new HttpParams();
    params = params.append('cat', this.workout);
 ;


    this.vid_Data = this.httpClient.get('http://101bits.com/blog/healthoy/get_video1.php',{params});
    this.vid_Data
    .subscribe(data => {
      console.log(this.vid_Data);
      this.display_data=data.DATA;
      console.log('my data: ',this.display_data);
    })
  }
  hack(val) {
    return Array.from(val);
  }
  trusturl(val){
    var trusted=this.domSanitizer.bypassSecurityTrustResourceUrl(val)
    return(trusted);
  }
test(){
  console.log("asdfasfda");
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutSelectionPage');
    this.test();

    
  }

}
