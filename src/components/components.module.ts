import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import { ModalCashbackReceiverComponent } from './modal-cashback-receiver/modal-cashback-receiver';
import { ModalSettingsComponent } from './modal-settings/modal-settings';
import { PopoverNavOptionsComponent } from './popover-nav-options/popover-nav-options';
import { ModalAboutComponent } from './modal-about/modal-about';
import { ModalCashbackSuccessComponent } from './modal-cashback-success/modal-cashback-success';


@NgModule({
  declarations: [
    ModalCashbackReceiverComponent,
    ModalSettingsComponent,
    PopoverNavOptionsComponent,
    ModalAboutComponent,
    ModalCashbackSuccessComponent
  ],
  entryComponents: [
    ModalCashbackReceiverComponent,
    ModalSettingsComponent,
    PopoverNavOptionsComponent,
    ModalAboutComponent,
    ModalCashbackSuccessComponent
  ],
  imports: [IonicModule],
  exports: [
    ModalCashbackReceiverComponent,
    ModalSettingsComponent,
    PopoverNavOptionsComponent,
    ModalAboutComponent,
    ModalCashbackSuccessComponent
  ]
})
export class ComponentsModule {
}
