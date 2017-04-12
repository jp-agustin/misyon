import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

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
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
