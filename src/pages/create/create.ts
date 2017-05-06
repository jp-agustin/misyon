import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class Create {

  heads: FirebaseListObservable<any>;
  members: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.heads = af.database.list('/Person', {
      query: {
        orderByChild: 'Type',
        equalTo: 'Head'
      }
    });

    this.members = af.database.list('/Person', {
      query: {
        orderByChild: 'Type',
        equalTo: 'Member'
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Create');
  }

}
