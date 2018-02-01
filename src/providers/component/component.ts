import { HttpClient } from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';

/*
  Generated class for the RecipeComponentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipeComponentProvider implements OnInit{


  title = 'app';
  results = '';

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
  }

}
