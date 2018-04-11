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
days:any=[];
total:any=[];
DATA:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

  }

  ionViewWillEnter(){

    this.storage.get('DONE_DATA1').then((val) => {
        this.DATA=val;  
        console.log('done1', this.DATA);
        this.preparedata();
        });
  }
  newdate(date:any){
    return(this.days.indexOf(date) >= 0);

  }
  preparedata(){

    console.log('done2', this.DATA); 
    console.log(this.DATA.length);
    let totaldaycount=0;
    for(let i=0;i<this.DATA.length;i++){
//check if already here
let day=this.DATA[i]['created'];
day=day.toString();
day=day.substring(0, 11);
if(!this.newdate(day)){
    totaldaycount=1;
    this.days.push(day);
}else{
    totaldaycount+=1;
    
    this.total.splice(-1,1);
    this.total.push(totaldaycount);
}


console.log(this.days);
}
    HighCharts.chart('container', {
        chart: {
        type: 'line'
        },
        title: {
        text: 'Your recent activity'
        },
        xAxis: {
        categories: this.days
        },
        yAxis: {
        title: {
        text: 'Workouts done'
        }
        },
        series: [{
        name: 'Daily workout counts',
        data: this.total
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
                      color:'black'
                  }
              }
          }
      },
      series: [{
          name: 'Workout types',
         
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
  ionViewDidLoad(){


   
  

  }


}

