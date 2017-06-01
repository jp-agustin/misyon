import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Missiondetails } from '../missiondetails/missiondetails';

@IonicPage()
@Component({
  selector: 'page-ongoing',
  templateUrl: 'ongoing.html',
})
export class Ongoing {

  missions: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.missions = af.database.list('/Mission', {
      query: {
        orderByChild: 'Status',
        equalTo: 'On-going'
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ongoing');
  }

  missionDetails(missionId) {
    this.navCtrl.push(Missiondetails, missionId);
  }
}
