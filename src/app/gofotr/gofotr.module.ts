import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { FooterComponent } from '../footer/footer.component';




@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FormsModule, // Add FormsModule here
    IonicModule.forRoot() // Add IonicModule here
  ],
  exports:[FooterComponent]
})
export class GofotrModule { }
