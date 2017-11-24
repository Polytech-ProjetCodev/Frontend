import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [[Camera]]
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {

  }

}
