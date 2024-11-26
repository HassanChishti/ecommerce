import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from '../data/data.component';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { FormsModule } from '@angular/forms'; // Import FormsModule


@NgModule({
  declarations: [DataComponent],
  imports: [
    CommonModule,
    FormsModule, // Add FormsModule here
    IonicModule.forRoot() // Add IonicModule here
  ],
  exports:[DataComponent]
  
})
export class ShearingModule { }
