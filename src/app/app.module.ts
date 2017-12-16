import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegistrationPage } from '../pages/registration/registration';
import { UploadPage } from '../pages/fileupload/upload';
import { FBLoginPage } from '../pages/facebooklogin/fbLogin';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { FileChooser } from '@ionic-native/file-chooser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegistrationPage,
    UploadPage,
    FBLoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegistrationPage,
    UploadPage,
    FBLoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    FileChooser,
    Camera,
    Facebook,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
