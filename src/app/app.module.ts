import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {IonicStorageModule} from '@ionic/storage';

import {FormsModule} from '@angular/forms';

import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {QRScanner} from '@ionic-native/qr-scanner';
import {InAppBrowser} from '@ionic-native/in-app-browser';

import {MyApp} from './app.component';
import {ComponentsModule} from '../components/components.module';
import {HomePage} from '../pages/home/home';
import {CashbackServiceProvider} from '../providers/cashback-service/cashback-service';
import {UserServiceProvider} from '../providers/user-service/user-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    QRScanner,
    InAppBrowser,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CashbackServiceProvider,
    UserServiceProvider
  ]
})
export class AppModule {
}
