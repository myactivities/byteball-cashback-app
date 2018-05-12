import {Component} from '@angular/core';
import {NavController, PopoverController, ModalController, Events} from 'ionic-angular';

import {BarcodeScanner, BarcodeScanResult, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import {QRScanner} from '@ionic-native/qr-scanner';

import {PopoverSettingsComponent} from '../../components/popover-settings/popover-settings';
import {ModalCashbackReceiverComponent} from '../../components/modal-cashback-receiver/modal-cashback-receiver';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public receiverAddress: String;

  private cashbackData : FormGroup;

  constructor(public navCtrl: NavController,
              public scanner: BarcodeScanner,
              public popover: PopoverController,
              public modal: ModalController,
              public formBuilder: FormBuilder,
              public events: Events,
              public qrCode: QRScanner) {

    this.events.subscribe('submittedEmailAddress', data => {
      this.receiverAddress = data.address;
      this.cashbackData.controls['address'].setValue(data);
      console.log(this.cashbackData);
    });

    this.cashbackData = this.formBuilder.group({
      currency_amount: ['', Validators.required],
      address: ['', Validators.required],
    });

  }

  public showSettingsPopover(ev) {
    this.popover.create(PopoverSettingsComponent)
      .present({ev: ev});
  }

  public scanQRcode() {

    // Use QRScanner to get permissions, somehow BarcodeScanner doesn't ask for permissions and thus it never show up.
    this.qrCode.prepare()
      .then((): Promise<BarcodeScanResult> => {
        return this.scanner.scan({
          showTorchButton: true
        });
      })
      .then((data) => {
        if(data.format === 'QR_CODE'){
          this.events.publish('submittedEmailAddress',{address: data.text});
        }
      });

  }

  public openEmailInput() {
    this.modal.create(ModalCashbackReceiverComponent)
      .present()
  }

  public submitCashback(){
    console.log(this.cashbackData);
  }

}
