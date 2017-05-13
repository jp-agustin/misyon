import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Missiondetails } from '../missiondetails/missiondetails';

@IonicPage()
@Component({
  selector: 'page-mission-list',
  templateUrl: 'mission-list.html',
})
export class MissionList {

  missions: FirebaseListObservable<any>;
  type: string = "all";
  status: string = "all";

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.missions = af.database.list('/Mission');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissionList');
  }

  goToMissionList(missionId){
    this.navCtrl.push(Missiondetails, missionId);
  }

  filterList(){

  }

}
