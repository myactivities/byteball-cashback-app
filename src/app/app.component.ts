import {Component} from '@angular/core';
import {Platform, ModalController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {Storage} from '@ionic/storage';

import {HomePage} from '../pages/home/home';
import {ModalSettingsComponent} from '../components/modal-settings/modal-settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              modal: ModalController,
              storage: Storage) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();

      storage.get('user')
        .then(data => {
          if (!data) {
            modal
              .create(ModalSettingsComponent)
              .present();
          }
        });


    });
  }
}

