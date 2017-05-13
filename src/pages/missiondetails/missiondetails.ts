import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Profile } from '../profile/profile';
import { MemberList } from '../member-list/member-list';
import { Updates } from '../updates/updates';

@IonicPage()
@Component({
  selector: 'page-missiondetails',
  templateUrl: 'missiondetails.html',
})
export class Missiondetails {

  missionId: any;

  missions: FirebaseListObservable<any>;
  heads: FirebaseListObservable<any>;
  sMission: FirebaseListObservable<any>;
  sMember: FirebaseListObservable<any>;

  public membersId = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.missionId = this.navParams.data;

    this.missions = af.database.list('/Mission', { query: {
      orderByChild: 'MissionId',
      equalTo: this.missionId
      }
    });

    var childKey;
    this.sMission = af.database.list('/Mission', { 
      preserveSnapshot: true, 
      query: {
        orderByChild: 'MissionId',
        equalTo: this.missionId
      }
    });
    
    this.sMission.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        childKey = snapshot.child("HeadId").val();
        this.membersId = snapshot.child("Members").val();
      });
      this.heads = af.database.list('/Person', {
        query: {
          orderByChild: 'MemberId',
          equalTo: childKey
        }
      });
    })

  }

  ionViewDidLoad() {
    
  }

  profile(memberId) {
    this.navCtrl.push(Profile, memberId);
  }

  goToMemberList(){
    this.navCtrl.push(MemberList, this.membersId);
    console.log("send memList: " + this.membersId);
  }

  goToUpdates(missionId){
    this.navCtrl.push(Updates, missionId);
  }
}

