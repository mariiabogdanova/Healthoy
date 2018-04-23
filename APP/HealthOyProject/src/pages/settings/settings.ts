import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Settings } from '../../providers/providers';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // Our local settings object
  options: any;

  settingsReady = false;

  form: FormGroup;
  healthtips_notifications:any;
  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;
  workout_notifications:boolean=false;

  subSettings: any = SettingsPage;
  myDate:any;
  myDate2:any;
  constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService,
    private localNotifications: LocalNotifications) {
  }

  _buildForm() {
    let group: any = {
      option1: [this.options.option1],
      option2: [this.options.option2],
      option3: [this.options.option3]
    };

    switch (this.page) {
      case 'main':
        break;
      case 'profile':
        group = {
          option4: [this.options.option4]
        };
        break;
    }
    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      console.log(this.form.value);
      this.settings.merge(this.form.value);
    });
  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});
  }
  Sechdule_it(){

    this.localNotifications.schedule({
      id: 1,
      title: 'Hello from Health Oy',
      text: 'Hello this is a reminder from app',
      data: { mydata: 'My hidden message this is' },
      trigger: {at: new Date(new Date().getTime() + 5 * 1000)},
    });
  }

  Sechdule_it_withtime(time){
    
        this.localNotifications.schedule({
          id: 1,
          title: 'Hello from Health Oy',
          text: 'Hello this is a reminder from app',
          data: { mydata: 'My hidden message this is' },
          trigger: {at: time},
        });
      }
  ionViewWillEnter() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

    this.translate.get(this.pageTitleKey).subscribe((res) => {
      this.pageTitle = res;
    })

    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;

      this._buildForm();
    });
  }
  selectTimeWorkout(){

    console.log(this.workout_notifications);
    console.log(this.myDate);
    console.log(new Date(this.myDate));
    this.Sechdule_it();
    this.Sechdule_it_withtime(new Date(this.myDate));
  }
  selectHealthTip(){

    console.log(this.healthtips_notifications);
    console.log(this.myDate2);
  }
  ngOnChanges() {
    console.log('Ng All Changes');
  }
}
