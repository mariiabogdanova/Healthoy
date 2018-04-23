import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController,Platform ,AlertController } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
key:any="okok1";
  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  device_data:any;
 // @ViewChild(Nav) nav: Nav;
  constructor(
    public navCtrl: NavController, public alertCtrl: AlertController, public translateService: TranslateService,public push: Push, 
     public statusBar: StatusBar,public platform: Platform,public httpClient: HttpClient) {
   
    //ioni   this.showAlert("asdfasdf");
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
     
      this.initPushNotification();
    });
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = "Workout";// values['TAB1_TITLE'];
      this.tab2Title = "Activity";//values['TAB2_TITLE'];
      this.tab3Title = "Profile";//values['TAB3_TITLE'];
    });
  }

  showAlert(msg:any) {

    let params = new HttpParams();
    params = params.append('device_id', msg);
    this.device_data = this.httpClient.get('http://101bits.com/blog/healthoy/save_device.php',{params});
    this.device_data
    .subscribe(data => {
      console.log(this.device_data);
      this.device_data=data.DATA;
      console.log('my data: ',this.device_data);
    });

   /* let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  */
  }


  initPushNotification() {

   
    if (!this.platform.is('cordova')) {
      console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
      return;
    }
    const options: PushOptions = {
      android: {
        senderID: '1008892934921'
      },
      ios: {
        alert: 'true',
        badge: false,
        sound: 'true'
      },
      windows: {}
    };
    const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((data: any) => {
      console.log('device token -> ' + data.registrationId);
      this.showAlert( data.registrationId);


      //TODO - send device token to server
    });

    pushObject.on('notification').subscribe((data: any) => {
      console.log('message -> ' + data.message);
      //if user using app and push notification comes
      if (data.additionalData.foreground) {
        // if application open, show popup
        let confirmAlert = this.alertCtrl.create({
          title: 'New Notification',
          message: data.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              //TODO: Your logic here
        //      this.nav.push(DetailsPage, { message: data.message });
            }
          }]
        });
        confirmAlert.present();
      } else {
        //if user NOT using app and push notification comes
        //TODO: Your logic on click of push notification directly
      //  this.nav.push(DetailsPage, { message: data.message });
        console.log('Push notification clicked');
      }
    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin' + error));
  }

  
}
