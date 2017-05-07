import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  memId: any;
  members: FirebaseListObservable<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.memId = this.navParams.data;
    this.members = af.database.list('/Person', {
      query: {
        orderByChild: 'MemberId',
        equalTo: this.memId
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemProfile');
  }

}
