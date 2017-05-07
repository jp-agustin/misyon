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
import { Create } from '../pages/create/create';
import { Ongoing } from '../pages/ongoing/ongoing';
import { MemProfile } from '../pages/mem-profile/mem-profile';
import { HeadProfile } from '../pages/head-profile/head-profile';
import { CalendarPage } from '../pages/calendar/calendar';

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
      { title: 'On-going', component: Ongoing },
      { title: 'Create Mission', component: Create },
      { title: 'Organizations', component: HomePage },
      { title: 'Map', component: Map },
      { title: 'List', component: MissionList },
      { title: 'Calendar', component: CalendarPage }
    ];

    this.gheadPages = [
      { title: 'Home', component: HomePage },
      { title: 'Group Head', component: Current },
      { title: 'Organizations', component: HomePage },
      { title: 'Map', component: Map },
      { title: 'List', component: MissionList },
      { title: 'Calendar', component: CalendarPage },
      { title: 'Profile', component: HeadProfile }
    ];

    this.volunPages = [
      { title: 'Home', component: HomePage },
      { title: 'Volunteer', component: HomePage },
      { title: 'Map', component: Map },
      { title: 'List', component: MissionList },
      { title: 'Calendar', component: CalendarPage },
      { title: 'Profile', component: MemProfile }
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