import {Component} from '@angular/core';
import {ViewController, Events} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastController} from 'ionic-angular';

import {UserServiceProvider} from '../../providers/user-service/user-service';

@Component({
  selector: 'modal-settings',
  templateUrl: 'modal-settings.html'
})
export class ModalSettingsComponent {

  private settings: FormGroup;
  public passwordFieldType: string = 'password';

  constructor(private view: ViewController,
              private formBuilder: FormBuilder,
              private toast: ToastController,
              private events: Events,
              private userService: UserServiceProvider) {

    this.userService.getUser()
      .then((data) => {

        if (data) {
          this.settings.setValue(data);
        }

      });

    this.settings = this.formBuilder.group({
      partner: ['', Validators.required],
      partner_key: ['', Validators.required],
      currency: ['EUR', Validators.required],
      partner_cashback_percentage: ['10', Validators.required],
      description: ['restaurant', Validators.required],
    });

  }

  public saveSettings(): void {
    this.userService.saveUser(this.settings.value)
      .then(() => {
        this.view.dismiss();
        this.events.publish('updatedDefaultSettings');
        this.toast.create({
          message: 'Settings saved',
          duration: 3000,
          position: 'top'
        }).present()
      });
  }

  public closeModal() {
    this.view.dismiss();
  }

  public makePWVisible(){
    this.passwordFieldType = 'text';
  }

  public makePWInvisible(){
    this.passwordFieldType = 'password';
  }

}
