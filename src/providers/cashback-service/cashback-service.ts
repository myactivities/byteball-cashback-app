import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {UserServiceProvider} from '../user-service/user-service';

import {config} from '../../config/config';

import * as _ from 'underscore';


@Injectable()
export class CashbackServiceProvider {

  constructor(public http: HttpClient,
              public userService: UserServiceProvider) {

  }

  submitCashback(purchaseData): Promise<any> {
    //
    let keys = _.allKeys(purchaseData);

    let params = new HttpParams();

    _.each(keys, key => {
      params = params.append(key, purchaseData[key]);
    });

    return this.userService.getUser()
      .then(user => {

        let userKeys = _.allKeys(user);

        _.each(userKeys, key => {
          params = params.append(key, user[key]);
        });

        return params;

      })
      .then(params => {
        let url = config.byteball.paybackUrl;


        // ToDo: Customer + Description
        params = params.append('customer', 'ws');
        params = params.append('description', 'ws2');

        return this.http.request(
          "post", url, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params,
            responseType: 'json'
          })
          .toPromise()
          .then(data => {
            alert(JSON.stringify(data));
            return data;
          });
      })
      .catch(err => {
        alert(JSON.stringify(err));
        console.log(err);
      });

  }
}
