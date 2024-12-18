import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullProfilePageRoutingModule } from './full-profile-routing.module';

import { FullProfilePage } from './full-profile.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GofotrModule } from '../gofotr/gofotr.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullProfilePageRoutingModule,
    GofotrModule
  ],
  declarations: [FullProfilePage]
})
export class FullProfilePageModule {}
