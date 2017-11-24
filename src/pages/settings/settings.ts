import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [[Camera]]
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

}
