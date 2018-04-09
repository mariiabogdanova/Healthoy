import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
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
  video: any = {
    url: 'https://www.youtube.com/embed/MLleDRkSuvk',
    title: 'Awesome video'
};
trustedVideoUrl: SafeResourceUrl;
  constructor(public navCtrl: NavController, public navParams: NavParams,private domSanitizer: DomSanitizer, private http: HTTP) {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    this.workout = navParams.get('workout') ;
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutSelectionPage');
    this.getVideos();

  }

  getVideos(){
    this.http.get('http://www.students.oamk.fi/~t6mani00/ouasNews/services/GetTeachers.php', {}, {})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
  }

}
