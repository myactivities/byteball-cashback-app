import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {UserProfile} from '../../interfaces/UserProfile';

@Component({
  selector: 'modal-settings',
  templateUrl: 'modal-settings.html'
})
export class ModalSettingsComponent {

  private settings : FormGroup;

  constructor(private view: ViewController,
              private formBuilder: FormBuilder) {

    this.settings = this.formBuilder.group({
      partner: ['', Validators.required],
      partner_key: ['',Validators.required],
      currency: ['EUR',Validators.required],
      partner_cashback_percentage: ['',Validators.required],
      purchase_unit: ['',Validators.required]
    });

  }

  public closeModal(){
    this.view.dismiss();
  }

}
