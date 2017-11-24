import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [[Camera]]
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
