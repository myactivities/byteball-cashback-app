import {Component} from '@angular/core';
import {ModalController} from 'ionic-angular';

import {ModalSignupComponent} from '../modal-signup/modal-signup'

@Component({
  selector: 'popover-settings',
  templateUrl: 'popover-settings.html'
})
export class PopoverSettingsComponent {

  constructor(private modal: ModalController) {

  }

  public showSignupModal() {
    this.modal.create(ModalSignupComponent).present()
  }

}
