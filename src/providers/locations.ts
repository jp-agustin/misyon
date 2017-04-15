import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
 
@Injectable()
export class Locations {
 
    missions: FirebaseListObservable<any>;
 
    constructor(public af: AngularFire) {
      this.missions = this.af.database.list('/Mission');  
    }
 
    load(){
      return this.missions;
    };
 
}