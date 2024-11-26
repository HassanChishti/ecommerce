import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element';
import { GlobalService } from '../global.service';
import { ToastController } from '@ionic/angular';

register();
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

 public user :any[]=[]
 public contr = 1
 public quantity = 0
 
  constructor(
    public router:Router,
    public global:GlobalService,
    private toastController: ToastController

  ) {
    console.log('WishlistPage constructor');
   }

  ngOnInit() {
    console.log('WishlistPage ngOnInit');
    this.global.Wish.subscribe(data => {
      console.log('Wishlist data received:', data);
      this.user = data;
    });
  }
  pro(img:any, ){
    this.router.navigate(['product']);
    this.global.det_getdata(img)
  }
  async removeFromWishlist(item: any) {
    this.global.removeFromWishlist(item); // Call removeFromWishlist from WishlistService
    this.user = this.global.getWishlist(); // Update wishlist in the component
    const toast = await this.toastController.create({
      message: `${item.itmname} removed from wishlist`,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
}

  
  }
