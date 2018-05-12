import { Component } from '@angular/core';
import {ViewController, Events} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'modal-cashback-receiver',
  templateUrl: 'modal-cashback-receiver.html'
})
export class ModalCashbackReceiverComponent {
  private cashbackReceiver : FormGroup;


  constructor(private view: ViewController,
              private formBuilder: FormBuilder,
              private events:Events) {

    this.cashbackReceiver = this.formBuilder.group({
      emailAddress: ['', Validators.compose([Validators.required, Validators.email])],
    });

  }

  public closeModal(){
    this.view.dismiss();
  }

  public submitEmailAddress(){
    this.events.publish('submittedEmailAddress',this.cashbackReceiver.value.emailAddress);
    this.view.dismiss();
  }

}
