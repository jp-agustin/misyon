import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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
        equalTo: 1
      }
    });
  }

  ionViewDidLoad() {
    
  }

}