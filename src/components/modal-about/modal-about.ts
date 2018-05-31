import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  selector: 'modal-about',
  templateUrl: 'modal-about.html'
})
export class ModalAboutComponent {

  constructor(public view: ViewController) {
  }

  public closeModal() {
    this.view.dismiss();
  }

}
