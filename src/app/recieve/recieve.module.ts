import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecievePageRoutingModule } from './recieve-routing.module';

import { RecievePage } from './recieve.page';
import { GofotrModule } from '../gofotr/gofotr.module';
// import { DataComponent } from '../data/data.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecievePageRoutingModule,
    GofotrModule
  ],
  declarations: [RecievePage]
})
export class RecievePageModule {}
