import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClothingPageRoutingModule } from './clothing-routing.module';

import { ClothingPage } from './clothing.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GofotrModule } from '../gofotr/gofotr.module';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClothingPageRoutingModule,
    GofotrModule
  ],
  declarations: [ClothingPage]
})
export class ClothingPageModule {}
