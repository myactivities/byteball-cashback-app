import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Validators} from "@angular/forms";

/*
  Generated class for the CashbackServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CashbackServiceProvider {

  constructor(public http: HttpClient) {

  }

  submitCashback(){
    
  }

  //
  // this.cashbackData = this.formBuilder.group({
  //   partner: ['', Validators.required],
  //   partner_key: ['', Validators.required],
  //   customer: ['', Validators.required],
  //   order_id: ['', Validators.required],
  //   description: ['', Validators.required],
  //   merchant: ['', Validators.required],
  //   currency: ['', Validators.required],
  //   currency_amount: ['', Validators.required],
  //   partner_cashback_percentage: ['', Validators.required],
  //   purchase_unit: ['', Validators.required],
  //   address: ['', Validators.compose([Validators.required, Validators.email])],
  // });



}
