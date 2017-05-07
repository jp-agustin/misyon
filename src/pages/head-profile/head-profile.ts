import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@IonicPage()
@Component({
  selector: 'page-head-profile',
  templateUrl: 'head-profile.html',
})
export class HeadProfile {

  heads: FirebaseListObservable<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.heads = af.database.list('/Person', {
      query: {
        orderByChild: 'MemberId',
        equalTo: 21
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeadProfile');
  }

}
