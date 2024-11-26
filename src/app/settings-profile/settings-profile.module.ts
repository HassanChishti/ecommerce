import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsProfilePageRoutingModule } from './settings-profile-routing.module';

import { SettingsProfilePage } from './settings-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsProfilePageRoutingModule
  ],
  declarations: [SettingsProfilePage]
})
export class SettingsProfilePageModule {}
