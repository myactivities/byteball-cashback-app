import {Component} from '@angular/core';
import {ViewController, NavParams} from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";

import {config} from '../../config/config';

@Component({
  selector: 'modal-cashback-success',
  templateUrl: 'modal-cashback-success.html'
})
export class ModalCashbackSuccessComponent {

  public viewData;


  constructor(private view: ViewController,
              private navParams: NavParams,
              private browser: InAppBrowser) {

    this.viewData = this.navParams.data;

    console.log(this.viewData);

  }

  public showUnit(){

    let explorerUrl = config.byteball.explorerUrl + '#' + this.viewData.unit;

    this.browser
      .create(explorerUrl, '_system')
      .show();
  }




  public closeModal(){
    this.view.dismiss();
  }

}
