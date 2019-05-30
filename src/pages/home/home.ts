import {Component, OnInit} from '@angular/core';
import {ModalController, PopoverController, Platform, NavController,
  Events, LoadingController, ToastController} from 'ionic-angular';

import {BarcodeScanner} from '@ionic-native/barcode-scanner';

import {ModalCashbackReceiverComponent} from '../../components/modal-cashback-receiver/modal-cashback-receiver';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {CashbackServiceProvider} from '../../providers/cashback-service/cashback-service';
import {config} from '../../config/config';

import {PopoverNavOptionsComponent} from '../../components/popover-nav-options/popover-nav-options';
import {ModalCashbackSuccessComponent} from '../../components/modal-cashback-success/modal-cashback-success';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  public receiverAddress: String;
  public openingQRCodeScanner: boolean;
  public showButtons:boolean;

  private cashbackData: FormGroup;

  ngOnInit(){
    this.showButtons = true;
  }

  constructor(public nav: NavController,
              public scanner: BarcodeScanner,
              public modal: ModalController,
              public popover: PopoverController,
              public formBuilder: FormBuilder,
              public events: Events,
              public loading: LoadingController,
              public toast: ToastController,
              public platform: Platform,
              private cashbackService: CashbackServiceProvider) {

    this.events.subscribe('submittedEmailAddress', data => {
      this.receiverAddress = data;
      this.cashbackData.controls['address'].setValue(data);
    });

    this.events.subscribe('submittedByteballAddress', data => {
      this.receiverAddress = data.address;
      this.cashbackData.controls['address'].setValue(data.address);
    });


    this.cashbackData = this.formBuilder.group({
      order_id: ['', Validators.required],
      currency_amount: ['', Validators.required],
      address: ['', Validators.required]
    });

  }

  public showNavOptions(ev){
    this.popover.create(PopoverNavOptionsComponent)
      .present({ev:ev});
  }

  public hideButton(){
    setTimeout(()=>{
      this.showButtons = false;
    },200);
  }

  public showButton(){
    setTimeout(()=>{
      this.showButtons = true;
    },200);
  }

  public scanQRcode() {
    this.platform.registerBackButtonAction(()=>{
      this.nav.pop();
    },999);
    this.openingQRCodeScanner = true;

    // Use QRScanner to get permissions, somehow BarcodeScanner doesn't ask for permissions and thus it never show up.
    this.scanner.scan({
      showTorchButton: true,
      prompt: ''
    }).then((data) => {
        this.openingQRCodeScanner = false;
        if (data.format === 'QR_CODE') {
          let byteballAddress = data.text.replace('obyte:','');
          this.events.publish('submittedByteballAddress', {address: byteballAddress});
        }
      });

  }

  public openEmailInput() {
    this.modal.create(ModalCashbackReceiverComponent, {address: this.cashbackData.controls['']})
      .present()
  }

  public submitCashback() {
    let _loading = this.loading.create({
      content: config.loadingText
    });
    _loading.present();
    this.cashbackService.submitCashback(this.cashbackData.value)
      .then(data => {

        _loading.dismiss();

        if(data){

          switch (data.result){
            case 'error':
              this.toast.create({
                message: data.error,
                position: 'top',
                cssClass: 'toast-error',
                showCloseButton: true
              }).present();
              break;
            case 'ok':
              this.modal
                .create(ModalCashbackSuccessComponent, data)
                .present();
              this.cashbackData.reset();

              break;
          }

        }

      });
  }

}
