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

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public storage: Storage) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.storage.get('token').then((res) => {console.log('TOKEN : ' + res)});

    this.storage.get('token').then((res) => {

    });

    return Observable.fromPromise(this.storage.get('token'))
      .mergeMap((token)=> {
        if (token.length > 15){
          request = request.clone({
            setHeaders: {
              'Authorization': 'Token ' + token
            }
          });
        }
        return next.handle(request);
      })
  }
}
