import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AcercaPage } from './acerca';
import { AcercaPopoverPage } from '../acerca-popover/acerca-popover';
import { AcercaPageRoutingModule } from './acerca-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcercaPageRoutingModule
  ],
  declarations: [AcercaPage, AcercaPopoverPage],
  entryComponents: [AcercaPopoverPage],
  bootstrap: [AcercaPage],
})
export class AcercaModule {}
