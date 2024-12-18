import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopPageRoutingModule } from './shop-routing.module';

import { ShopPage } from './shop.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShearingModule } from '../shearing/shearing.module';
import { GofotrModule } from '../gofotr/gofotr.module';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopPageRoutingModule,
    ShearingModule,
    GofotrModule
  ],
  declarations: [ShopPage]
})
export class ShopPageModule {}
