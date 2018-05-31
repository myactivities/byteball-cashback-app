import {Component} from '@angular/core';
import {ViewController, ModalController} from 'ionic-angular';

import {ModalSettingsComponent} from '../../components/modal-settings/modal-settings';
import {ModalAboutComponent} from '../../components/modal-about/modal-about';


@Component({
  selector: 'popover-nav-options',
  templateUrl: 'popover-nav-options.html'
})
export class PopoverNavOptionsComponent {

  constructor(public view: ViewController,
              public modal: ModalController) {

  }

  openModal(type: String) {

    switch (type) {
      case 'settings':
        this.modal
          .create(ModalSettingsComponent)
          .present();
        break;

      case 'about':
        this.modal
          .create(ModalAboutComponent)
          .present();
        break;
    }

    this.view.dismiss();
  }

}
