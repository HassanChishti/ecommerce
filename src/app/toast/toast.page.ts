import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage {
  public img: any = '../../assets/img/baner1.jpg';

  constructor(public router: Router, public global: GlobalService) {}

  goProduct(img: any) {
    console.log(img);
    // this.global.productFunction(img);
    this.router.navigate(['/state2']);
  }
}