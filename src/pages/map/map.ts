  import { Component, ElementRef, ViewChild } from '@angular/core';
import { Locations } from '../../providers/locations';
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
 
    constructor(public navCtrl: NavController, public maps: GoogleMaps, public platform: Platform, public locations: Locations, af: AngularFire) {
       this.missions = af.database.list('/Mission');
    }
 
    ionViewDidLoad(){
 
        this.platform.ready().then(() => {
 
            let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);

            Promise.all([
                mapLoaded
            ]).then((result) => {
                
                this.missions.subscribe(snapshots => {
                  snapshots.forEach(mission => {
                    this.maps.addMarker(mission.XCoord, mission.YCoord);
                  });
                })
 
            });
 
        });
 
    }
 
}