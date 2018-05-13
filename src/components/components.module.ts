import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import { ModalCashbackReceiverComponent } from './modal-cashback-receiver/modal-cashback-receiver';
import { ModalSettingsComponent } from './modal-settings/modal-settings';


@NgModule({
  declarations: [
    ModalCashbackReceiverComponent,
    ModalSettingsComponent
  ],
  entryComponents: [
    ModalCashbackReceiverComponent,
    ModalSettingsComponent
  ],
  imports: [IonicModule],
  exports: [
    ModalCashbackReceiverComponent,
    ModalSettingsComponent
  ]
})
export class ComponentsModule {
}
