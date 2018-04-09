import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as HighCharts from 'highcharts';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  chartOptions :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) { 

  }
  
  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
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
