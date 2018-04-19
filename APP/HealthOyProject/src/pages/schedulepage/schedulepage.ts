import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as HighCharts from 'highcharts';
import { Storage } from '@ionic/storage';
import { Screenshot } from '@ionic-native/screenshot';
import { SocialSharing } from '@ionic-native/social-sharing';




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
data_cat:any=[];
DATA:any;
screen: any;
state: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private screenshot: Screenshot, private socialSharing: SocialSharing) {

  }


  ionViewWillEnter(){

    this.storage.get('DONE_DATA1').then((val) => {
        this.DATA=val;  
        console.log('done1', this.DATA);
        this.preparedata();
        });

        this.storage.get('DONE_CATEGORY').then((val) => {
            this.data_cat=val;  
            console.log('done_category', this.data_cat);
            this.preparedataCat();
             });
  }
  newdate(date:any){
    return(this.days.indexOf(date) >= 0);

  }
  preparedataCat(){
      let cat1=0;
      let cat2=0;
      let cat4=0;
      let cat3=0;
      for(let i=0;i<this.data_cat.length;i++){
            if(this.data_cat[i]==1){
                cat1+=1;
            }else if(this.data_cat[i]==2){
                cat2+=1;
            }else if(this.data_cat[i]==3){
                cat3+=1;
            }else if(this.data_cat[i]==4){
                cat4+=1;
            }
      }
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
                y: cat1,
                
            }, {
                name: '10 minutes',
                y: cat2
            }, {
                name: '15 minutes',
                y: cat3
            }, {
                name: '20 minutes',
                y: cat4
            }]
        }]
    });

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
    this.total.push(totaldaycount);    
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
  
 
  }
  ionViewDidLoad(){



}





  screenShot() {
      console.log(this.screenshot);
       this.screenshot.URI(80).then(res => {
    this.socialSharing.share("Here are my awesome results with this awesome Heath App!!!",
                             "",
                             res.URI,
                             ""
                             );
  }).catch(err => {
    console.log(err);
  });

}


//     this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(res => {
//       this.screen = res.filePath;
//       this.state = true;
//       this.reset();
//     });
//   }

//     screenShotURI() {
//     this.screenshot.URI(80).then(res => {
//       this.screen = res.URI;
//       this.state = true;
//       this.reset();
//     });
// }

// regularShare(index){
//   this.socialSharing.share(screenshot, null, null, null);
// }




}

//   topng(){
// var chartConfig = {
    
// }


// var data = {
//     options: JSON.stringify(chartConfig),
//     filename: "filename",
//     type: 'image/png',
//     async: true
// };

// var exportUrl = 'http://export.highcharts.com/';
// $.post(exportUrl, data, function(data) {
//     var url = exportUrl + data;
//     window.open(url);
// });

//   }




