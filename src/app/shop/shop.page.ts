import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { DataService } from '../data.service';
import { GlobalService } from '../global.service';
import { ToastController } from '@ionic/angular';

register();

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  selectedHearts = new Set<any>(); // Set to keep track of selected hearts


 public banr: any []= [];
 public catagori1: any []= [];
 public top1: any []= [];
 public items1: any []= [];
 public sale1: any []= [];
 public just1: any []= [];


  constructor(
    public router:Router,
    private dataService:DataService,
    public global:GlobalService,
    private toastController: ToastController
  ) { 
    console.log('ShopPage constructor');
  }

  ngOnInit() {
    this.banr=this.dataService.banr;
    this.catagori1=this.dataService.catagori1;
    this.top1=this.dataService.top1;
    this.items1=this.dataService.items1;
    this.sale1=this.dataService.sale1;
    this.just1=this.dataService.just1;
  }

  pro(img:any, ){
    this.router.navigate(['product']);
    this.global.det_getdata(img)
  }
 
  catagri(catagori1:any){
    this.router.navigate(['clothing'])
    this.global.cata_getdata(catagori1)
  }
  wish(data:any){
     console.log('Wish button clicked with data:', data);
  // this.global.wish_getdata(data);
  }

toggleWishlist(item: any) {
  if (this.isInWishlist(item)) {
    this.removeFromWishlist(item);
  } else {
    this.addToWishlist(item);
  }
}
async addToWishlist(item: any) {
  this.global.addToWishlist(item);
  const toast = await this.toastController.create({
    message: `${item.itmname} added to wishlist`,
    duration: 2000, // Toast duration in milliseconds
    position: 'bottom' // Position of the toast message
  });
  toast.present();
}

async removeFromWishlist(item: any) {
  this.global.removeFromWishlist(item);
  const toast = await this.toastController.create({
    message: `${item.itmname} removed from wishlist`,
    duration: 2000,
    position: 'bottom'
  });
  toast.present();
}

// addToWishlist(item: any) {
//   this.global.addToWishlist(item);
// }

// removeFromWishlist(item: any) {
//   this.global.removeFromWishlist(item);
// }

isInWishlist(item: any): boolean {
  return this.global.isInWishlist(item);
}



}
