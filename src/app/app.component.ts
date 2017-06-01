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
import { OrgList } from '../pages/org-list/org-list';
import { VolunteerHome } from '../pages/volunteer-home/volunteer-home';

@Component({
  selector: 'side-menu',
  templateUrl: 'app.html'
})
export class MyApp {  
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;
  commonpages: Array<{title: string, icon: string}>;
  adminPages: Array<{title: string, component: any, icon: string}>;
  gheadPages: Array<{title: string, component: any, icon: string}>;
  volunPages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.adminPages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Admin', component: Tabs, icon: 'person' },
      { title: 'Ongoing', component: Ongoing, icon: 'refresh' },
      { title: 'Create Mission', component: Create, icon: 'create' },
      { title: 'Organizations', component: OrgList, icon: 'contacts' },
      { title: 'Map', component: Map, icon: 'pin' },
      { title: 'List', component: MissionList, icon: 'list-box' },
      { title: 'Calendar', component: CalendarPage, icon: 'calendar' }
    ];

    this.gheadPages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Group Head', component: Current, icon: 'person' },
      { title: 'Organizations', component: OrgList, icon: 'contacts' },
      { title: 'Map', component: Map, icon: 'pin' },
      { title: 'List', component: MissionList, icon: 'list-box' },
      { title: 'Calendar', component: CalendarPage, icon: 'calendar' },
      { title: 'Profile', component: HeadProfile, icon: 'contact' }
    ];

    this.volunPages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Volunteer', component: VolunteerHome, icon: 'person' },
      { title: 'Map', component: Map, icon: 'pin' },
      { title: 'List', component: MissionList, icon: 'clipboard' },
      { title: 'Calendar', component: CalendarPage, icon: 'calendar' },
      { title: 'Profile', component: MemProfile, icon: 'contact' }
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