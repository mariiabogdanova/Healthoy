import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as HighCharts from 'highcharts';
import { Storage } from '@ionic/storage';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

  }


  ionViewDidLoad(){

this.storage.get('DONE').then((val) => {
      console.log('done', val);
    });


    HighCharts.chart('container', {
      chart: {
      type: 'line'
      },
      title: {
      text: 'Your recent activity'
      },
      xAxis: {
      categories: ['day 1', 'day 2', 'day 3', 'day 4', 'day 5', 'day 6', 'day 7']
      },
      yAxis: {
      title: {
      text: 'Workouts done'
      }
      },
      series: [{
      name: 'Your name',
      data: [1, 0, 4, 5, 2, 2, 1]
      }]
      });

HighCharts.chart('pie_container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Types of workouts done'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (HighCharts.theme && HighCharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Workout types',
        colorByPoint: true,
        data: [ {
            name: '5 minutes',
            y: 24.03,
            
        }, {
            name: '10 minutes',
            y: 10.38
        }, {
            name: '15 minutes',
            y: 4.77
        }, {
            name: '20 minutes',
            y: 0.91
        }]
    }]
});

  }


}

