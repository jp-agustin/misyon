import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Missiondetails } from '../missiondetails/missiondetails';

@IonicPage()
@Component({
  selector: 'page-volunteer-home',
  templateUrl: 'volunteer-home.html',
})
export class VolunteerHome {

  missions: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
  
    this.missions = af.database.list('/Mission', {
      query: {
        limitToLast: 2
      }
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolunteerHome');
  }

  missionDetails(missionId) {
    this.navCtrl.push(Missiondetails, missionId);
  }
}
