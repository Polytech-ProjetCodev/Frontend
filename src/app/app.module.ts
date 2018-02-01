import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { Camera } from '@ionic-native/camera';
import {NewRecipePage} from "../pages/newRecipe/newRecipe";
import {ProfilePage} from "../pages/profile/profile";
import {SettingsPage} from "../pages/settings/settings";
import { RecipeComponentProvider } from '../providers/component/component';

import { HttpClientModule } from '@angular/common/http';
import {AboutPage} from "../pages/about/about";
import {CardComponent} from "../components/card/card";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewRecipePage,
    ProfilePage,
    SettingsPage,
    AboutPage,
    CardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewRecipePage,
    ProfilePage,
    SettingsPage,
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
