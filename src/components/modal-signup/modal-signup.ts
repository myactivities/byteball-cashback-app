import { Component } from '@angular/core';

/**
 * Generated class for the ModalSignupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-signup',
  templateUrl: 'modal-signup.html'
})
export class ModalSignupComponent {

  text: string;

  constructor() {
    console.log('Hello ModalSignupComponent Component');
    this.text = 'Hello World';
  }

}
