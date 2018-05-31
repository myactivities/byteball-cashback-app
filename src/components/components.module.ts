import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import { ModalCashbackReceiverComponent } from './modal-cashback-receiver/modal-cashback-receiver';
import { ModalSettingsComponent } from './modal-settings/modal-settings';
import { PopoverNavOptionsComponent } from './popover-nav-options/popover-nav-options';
import { ModalAboutComponent } from './modal-about/modal-about';


@NgModule({
  declarations: [
    ModalCashbackReceiverComponent,
    ModalSettingsComponent,
    PopoverNavOptionsComponent,
    ModalAboutComponent
  ],
  entryComponents: [
    ModalCashbackReceiverComponent,
    ModalSettingsComponent,
    PopoverNavOptionsComponent,
    ModalAboutComponent
  ],
  imports: [IonicModule],
  exports: [
    ModalCashbackReceiverComponent,
    ModalSettingsComponent,
    PopoverNavOptionsComponent,
    ModalAboutComponent
  ]
})
export class ComponentsModule {
}
