import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Missiondetails } from '../missiondetails/missiondetails';

@IonicPage()
@Component({
  selector: 'page-current',
  templateUrl: 'current.html',
})
export class Current {

  missions: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    
    this.missions = af.database.list('/Mission', {
      query: {
        orderByChild: 'HeadId',
        equalTo: 21
      }
    });
  }

  ionViewDidLoad() {
    
  }

  missionDetails(missionId) {
    this.navCtrl.push(Missiondetails, missionId);
  }

}