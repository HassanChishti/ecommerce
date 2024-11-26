import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WishlistPageRoutingModule } from './wishlist-routing.module';

import { WishlistPage } from './wishlist.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GofotrModule } from '../gofotr/gofotr.module';
@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WishlistPageRoutingModule,
    GofotrModule
  ],
  declarations: [WishlistPage]
})
export class WishlistPageModule {}
