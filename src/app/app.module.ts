import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Map } from '../pages/map/map';
import { Current } from '../pages/current/current';
import { LoginPage } from '../pages/login/login';
import { MissionList } from '../pages/mission-list/mission-list';
import { Missiondetails } from '../pages/missiondetails/missiondetails';

import { GoogleMaps } from '../providers/google-maps';
import { Connectivity } from '../providers/connectivity';

// Firebase Configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBGJ0zckz8TB0CYGoNPZQKxjAc7t1bddKg",
  authDomain: "misyon-9b85c.firebaseapp.com",
  databaseURL: "https://misyon-9b85c.firebaseio.com",
  projectId: "misyon-9b85c",
  storageBucket: "misyon-9b85c.appspot.com",
  messagingSenderId: "815240287928"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Map,
    Current,
    LoginPage,
    Missiondetails,
    MissionList
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Map,
    Current,
    LoginPage,
    Missiondetails,
    MissionList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Network,
    GoogleMaps,
    Connectivity,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
