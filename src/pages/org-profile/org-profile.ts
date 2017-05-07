import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@IonicPage()
@Component({
  selector: 'page-org-profile',
  templateUrl: 'org-profile.html',
})
export class OrgProfile {

  orgId: any;
  orgs: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.orgId = this.navParams.data;

    this.orgs = af.database.list('/Organization', { 
      query: {
        orderByChild: 'OrgId',
        equalTo: this.orgId
      }
    });    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrgProfile');
  }

}
