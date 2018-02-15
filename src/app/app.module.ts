import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { Camera } from '@ionic-native/camera';
import {NewRecipePage} from "../pages/newRecipe/newRecipe";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AboutPage} from "../pages/about/about";
import {RecipeComponentComponent} from "../components/recipe-component/recipe-component";
import {RecipeComponent} from "../components/recipe/recipe";
import { IngredientProvider } from '../providers/ingredient/ingredient';
import {ModalContentPage} from "../components/recipe-component/recipe-component-modal/modal-content";
import {RecipeProvider} from "../providers/recipe/recipe";
import {RecipeComponentProvider} from "../providers/recipe-component/recipe-component";
import {RecipeModalContentPage} from "../components/recipe/recipe-modal/recipe-modal-content";
import {RecipeListPage} from "../pages/recipe-list/recipe-list";
import {RecipeCardComponent} from "../components/recipe-card/recipe-card";
import {LoginPage} from "../pages/login/login";
import {IonicStorageModule, Storage} from "@ionic/storage";
import {AuthProvider} from "../providers/auth/auth";
import {TokenInterceptor} from "../providers/auth/token-interceptor";

@NgModule({
  declarations: [
    MyApp,
    NewRecipePage,
    AboutPage,
    RecipeComponent,
    RecipeComponentComponent,
    ModalContentPage,
    RecipeModalContentPage,
    RecipeListPage,
    RecipeCardComponent,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewRecipePage,
    AboutPage,
    ModalContentPage,
    RecipeModalContentPage,
    RecipeListPage,
    LoginPage
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    IngredientProvider,
    RecipeProvider,
    RecipeComponentProvider,
    AuthProvider
  ]
})
export class AppModule {}
