import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { OrgProfile } from '../org-profile/org-profile';

@IonicPage()
@Component({
  selector: 'page-org-list',
  templateUrl: 'org-list.html',
})
export class OrgList {

  orgs: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.orgs = af.database.list('/Organization');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrgList');
  }

  goToOrgProfile(orgId) {
    this.navCtrl.push(OrgProfile, orgId);
  }
}
