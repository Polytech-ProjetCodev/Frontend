import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {CONFIG} from "../../config";
import {User} from "../../app/shared/user.model";
import {TOKEN} from "../../token-conf";

/*
  Generated class for the IngredientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  authUrl = CONFIG.api.url() + 'api-token-auth';

  constructor(public http: HttpClient) {
    console.log('Hello IngredientProvider Provider');
  }

  postUser(user: User): Observable<{token: string}> {
    console.log(this.authUrl + '.json');

    let body = {username: user.username, password: user.password};

    return this.http.post<{token: string}>(this.authUrl + '.json', body);
  }

}
