import { AddPerson } from './../pages/coworkers/add-person/add-person';
import { AddButton } from './../pages/coworkers/add-button/add-button';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Coworkers } from '../pages/coworkers/coworkers';

import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DbProvider } from '../providers/db/db';
import { IonicStorageModule } from '@ionic/Storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Coworkers,
    AddButton,
    AddPerson
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Coworkers,
    AddPerson
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbProvider
  ]
})
export class AppModule {}
