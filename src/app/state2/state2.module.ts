import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { State2PageRoutingModule } from './state2-routing.module';

import { State2Page } from './state2.page';
import { ShearingModule } from '../shearing/shearing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    State2PageRoutingModule,
    ShearingModule
  ],
  declarations: [State2Page]
})
export class State2PageModule {}
