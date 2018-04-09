import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as HighCharts from 'highcharts';


/**
 * Generated class for the SchedulepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedulepage',
  templateUrl: 'schedulepage.html',
})
export class SchedulepagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad(){
    HighCharts.chart('container', {
      chart: {
      type: 'line'
      },
      title: {
      text: 'Fruit Consumption'
      },
      xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
      title: {
      text: 'Fruit eaten'
      }
      },
      series: [{
      name: 'Jane',
      data: [1, 0, 4]
      }, {
      name: 'John',
      data: [5, 7, 3]
      }]
      });
  }

}

