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
  loginError: string;
  registerError: string;
  logged = false;
  userRegistered = false;
  tokenAcquired = false;

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {
    this.storage.set('token', 'blop')
  }

  login(user: User) {
    if (this.userSubmitted !== true){
      this.userSubmitted = true;
      this.authProvider.postUser(this.user).subscribe(
        (response) => {
          console.log("TOKEN : " + response.token.toString());
          this.tokenAcquired = true;
          this.user.token = response.token;
          console.log(this.user.token);
          this.storage.set('token', this.user.token).then((val) =>
            {
              this.logged = true;
              this.navCtrl.push(RecipeListPage);
            }
          );
        }, (err) => {
          this.loginError = err;
          this.storage.set('token', 'blop').then((res) => {this.login(this.user)});
        }
      );
    }
  }

  register(user: User) {
    if (this.userRegistered !== true){
      this.userSubmitted = true;
      this.authProvider.createUser(this.user).subscribe(
        (response) => {
          console.log(response);
          let newUser: User;
          newUser = response;
          console.log(response);
          this.login(newUser);
        }, (err) => {
          this.registerError = err + "TOKEN : " + this.storage.get('token');
        }
      );
    }
  }
}
