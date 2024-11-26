import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeloCardPageRoutingModule } from './helo-card-routing.module';

import { HeloCardPage } from './helo-card.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeloCardPageRoutingModule
  ],
  declarations: [HeloCardPage]
})
export class HeloCardPageModule {}
