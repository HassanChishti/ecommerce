import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToastPageRoutingModule } from './toast-routing.module';
import { ToastPage } from './toast.page';
import { ShearingModule } from '../shearing/shearing.module'; // Import ShearingModule
// import { DataComponent } from '../shearing/data/data.component'; // Import DataComponent

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastPageRoutingModule,
    ShearingModule
  ],
  declarations: [
    ToastPage,
    // DataComponent // Add DataComponent to the declarations array
  ]
})
export class ToastPageModule {}


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
// import { ToastPageRoutingModule } from './toast-routing.module';
// import { ToastPage } from './toast.page';
// import { ShearingModule } from '../shearing/shearing.module'; // Import ShearingModule

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     ToastPageRoutingModule,
//     ShearingModule
//   ],
//   declarations: [ToastPage]
// })
// export class ToastPageModule {}


