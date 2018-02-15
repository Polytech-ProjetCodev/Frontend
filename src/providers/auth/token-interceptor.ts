import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Storage} from "@ionic/storage";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/mergeMap";
import {TOKEN} from "../../token-conf";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public storage: Storage) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('TOKEN : ' + this.storage.get('token'));

    return Observable.fromPromise(this.storage.get('token'))
      .mergeMap((token)=> {
        request = request.clone({
          setHeaders: {
            'Authorization': 'Token ' + token
          }
        });
        return next.handle(request);
      })
  }
}
