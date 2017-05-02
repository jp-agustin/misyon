import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { Current } from '../pages/current/current';
import { Map } from '../pages/map/map';
import { Tabs } from '../pages/tabs/tabs';
import { MissionList } from '../pages/mission-list/mission-list';

@Component({
  selector: 'side-menu',
  templateUrl: 'app.html'
})
export class MyApp {  
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;

  pages: Array<{title: string, component: any}>;
  commonpages: Array<{title: string}>;
  adminPages: Array<{title: string, component: any}>;
  gheadPages: Array<{title: string, component: any}>;
  volunPages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.adminPages = [
      { title: 'Home', component: HomePage },
      { title: 'Admin', component: Tabs },
      { title: 'On-going', component: HomePage },
      { title: 'Map', component: Map },
      { title: 'List', component: MissionList },
      { title: 'Calendar', component: HomePage }
    ];

    this.gheadPages = [
      { title: 'Home', component: HomePage },
      { title: 'Group Head', component: Current },
      { title: 'Map', component: Map },
      { title: 'List', component: MissionList },
      { title: 'Calendar', component: HomePage },
      { title: 'Profile', component: HomePage }
    ];

    this.volunPages = [
      { title: 'Home', component: HomePage },
      { title: 'Volunteer', component: HomePage },
      { title: 'Map', component: Map },
      { title: 'List', component: MissionList },
      { title: 'Calendar', component: HomePage },
      { title: 'Profile', component: HomePage }
    ]; 
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  goToLogin() {
    this.nav.setRoot(LoginPage, {}, {animate: true, direction: 'backward'});
  }
}