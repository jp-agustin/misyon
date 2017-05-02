import { Component } from '@angular/core';
import { Nav, NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { Current } from '../current/current';
import { Map } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  activeMenu: string;

  constructor(public nav: Nav, public menuCtrl: MenuController, public navCtrl: NavController) {

  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'backward'});
  }

  goToAdmin() {
    this.activeMenu = 'AdminMenu';
    this.nav.setRoot(Map);
    this.menuCtrl.enable(true, 'adminMenu');
    this.menuCtrl.enable(false, 'gheadMenu');
    this.menuCtrl.enable(false, 'volunMenu');
  }

  goToGrouphead() {
    this.activeMenu = 'GheadMenu';
    this.nav.setRoot(Current);
    this.menuCtrl.enable(false, 'adminMenu');
    this.menuCtrl.enable(true, 'gheadMenu');
    this.menuCtrl.enable(false, 'volunMenu');
  }

  goToVolunteer() {
    this.activeMenu = 'VolunMenu';
    this.menuCtrl.enable(false, 'adminMenu');
    this.menuCtrl.enable(false, 'gheadMenu');
    this.menuCtrl.enable(true, 'volunMenu');
  }
}
