import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { Camera } from '@ionic-native/camera';
import {NewRecipePage} from "../pages/newRecipe/newRecipe";
import { RecipeComponentProvider } from '../providers/component/component';

import { HttpClientModule } from '@angular/common/http';
import {AboutPage} from "../pages/about/about";
import {CardComponent} from "../components/card/card";
import {RecipeComponent} from "../components/recipe/recipe";
import {RecipeComponentComponent} from "../components/recipe-component/recipe-component";

@NgModule({
  declarations: [
    MyApp,
    NewRecipePage,
    AboutPage,
    CardComponent,
    RecipeComponent,
    RecipeComponentComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewRecipePage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    RecipeComponentProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    RecipeComponentProvider
  ]
})
export class AppModule {}
