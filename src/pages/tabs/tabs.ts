import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChartMission } from '../chart-mission/chart-mission';
import { ChartPerson } from '../chart-person/chart-person';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {

  constructor(navParams: NavParams, public navCtrl: NavController) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
  ionViewDidLoad() {                                                                                                                                                                                                                                                                                                
    console.log('ionViewDidLoad Tabs');
  }
  mySelectedIndex: number;
  tab1Root: any = ChartMission;
  tab2Root: any = ChartPerson;

}

