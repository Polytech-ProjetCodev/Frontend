import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../app/shared/user.model";
import {AuthProvider} from "../../providers/auth/auth";
import {Storage} from "@ionic/storage";
import {RecipeListPage} from "../recipe-list/recipe-list";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  userSubmitted = false;
  authError: string;
  logged = false;

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {
  }

  async login(user: User) {
    console.log('Lolilol');

    if (this.userSubmitted !== true){
      this.userSubmitted = true;
      this.authProvider.postUser(this.user).subscribe(
        (response) => {
          console.log(response);
          this.user.token = response.token;
          console.log(this.user.token);
          this.storage.set('token', this.user.token);
          this.logged = true;
          this.navCtrl.push(RecipeListPage);
        }, (err) => {
          this.authError = err;
        }
      );
    }



  }

  async register(user: User) {

  }

}
