import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMaps } from '../../providers/google-maps';
import { NavController, Platform } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
 
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class Map {
 
    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

    missions: FirebaseListObservable<any>;
    type: string = "all";
    status: string = "all";
 
    constructor(public navCtrl: NavController, public maps: GoogleMaps, public platform: Platform, public af: AngularFire) {
      this.missions = this.af.database.list('/Mission');

    }
 
    ionViewDidLoad(){

      this.platform.ready().then(() => {
        
        let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);

        Promise.all([ 
            mapLoaded
        ]).then((result) => {
            console.log("enter result\n");
            this.missions.subscribe(snapshots => {
              snapshots.forEach(mission => {
               this.maps.addMarker(mission.XCoord, mission.YCoord, mission.Location, mission.Type, mission.Status);
              });
            })
 
        });
 
      });
 
    }

    filterMarkers(){
      this.maps.filterMarkers(this.type, this.status);
    }
 
}