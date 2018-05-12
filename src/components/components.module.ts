import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {PopoverSettingsComponent} from './popover-settings/popover-settings';
import { ModalSignupComponent } from './modal-signup/modal-signup';
import { ModalCashbackReceiverComponent } from './modal-cashback-receiver/modal-cashback-receiver';


@NgModule({
  declarations: [
    PopoverSettingsComponent,
    ModalSignupComponent,
    ModalCashbackReceiverComponent
  ],
  entryComponents: [
    PopoverSettingsComponent,
    ModalSignupComponent,
    ModalCashbackReceiverComponent
  ],
  imports: [IonicModule],
  exports: [
    PopoverSettingsComponent,
    ModalSignupComponent,
    ModalCashbackReceiverComponent
  ]
})
export class ComponentsModule {
}
