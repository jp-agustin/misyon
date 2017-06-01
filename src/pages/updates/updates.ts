import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@IonicPage()
@Component({
  selector: 'page-updates',
  templateUrl: 'updates.html',
})
export class Updates {

  missionId: any;

  updates: FirebaseListObservable<any>;
  missions: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.missionId = this.navParams.data;

    this.updates = af.database.list('/Updates', { 
      query: {
        orderByChild: 'MissionId',
        equalTo: this.missionId
      }
    });

    this.missions = af.database.list('/Mission', { 
      query: {
        orderByChild: 'MissionId',
        equalTo: this.missionId
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Updates');
  }

}
