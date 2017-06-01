import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@IonicPage()
@Component({
  selector: 'page-mem-profile',
  templateUrl: 'mem-profile.html',
})
export class MemProfile {

  volunteers: FirebaseListObservable<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.volunteers = af.database.list('/Person', {
      query: {
        orderByChild: 'MemberId',
        equalTo: 28
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemProfile');
  }

}
