import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Profile } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-member-list',
  templateUrl: 'member-list.html',
})
export class MemberList {

  memList: any;
  // Initializationg of the "array"
  sMembers: FirebaseListObservable<any>;
  public members = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.memList = this.navParams.data;

    var i;
    for (i = 0; i < this.memList.length; i++){
      this.sMembers = af.database.list('/Person', {
        preserveSnapshot: true, 
        query: {
          orderByChild: 'MemberId',
          equalTo: this.memList[i]
        }
      });
      this.sMembers.subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.members.push([snapshot.child("MemberId").val(), snapshot.child("FirstName").val() +" "+ snapshot.child("LastName").val(), snapshot.child("Image").val(), snapshot.child("Profession").val()]);
        });
      });
    }
  }
  
  goToProfile(memId){
    this.navCtrl.push(Profile, memId);
    console.log("send memId: " + memId);
  }
}
