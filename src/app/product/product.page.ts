


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  public user: any;
  public selectedColor: string = '';
  public selectedSize: string = '';
  public images: string[] = [];

  constructor(
    public router: Router,
    public global: GlobalService,
    public location:Location

    ) {}

  ngOnInit() {
    // this.global.Detaildata.subscribe((data) => {
    //   this.user = data;
    //   this.images = [this.user.itmimg, this.user.cataimg1,this.user.cataimg2,this.user.cataimg3,this.user.cataimg4];
    // });
    this.global.Detaildata.subscribe((data) => {
      this.user = data;
      if (this.user) {
        this.images = [this.user.selectedImage,this.user.itmimg];
      }
    });
    console.log('Product data:', this.user);
  }

  onSelectColor(color: string) {
    this.selectedColor = color;
    console.log('Selected color:', color);
  }

  onSelectSize(size: string) {
    this.selectedSize = size;
    console.log('Selected size:', size);
  }
  isButtonDisabled(): boolean {
    // Return true if either color or size is not selected
    return !this.selectedColor || !this.selectedSize;
  }

  go(item: any) {
    this.user.images = this.images;
    this.global.set_getdata(item, this.selectedColor, this.selectedSize, );
    this.router.navigate(['cart']);
  }

  go2() {
    this.location.back()
  }
}










// // product.page.ts
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { GlobalService } from '../global.service';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.page.html',
//   styleUrls: ['./product.page.scss'],
// })
// export class ProductPage implements OnInit {
//   public user: any;
//   public selectedColor: string = '';
//   public selectedSize: string = '';

//   constructor(public router: Router, public global: GlobalService) {}

//   ngOnInit() {
//     this.global.Detaildata.subscribe((data) => {
//       this.user = data;
//     });
//     console.log('Product data:', this.user);
//   }

//   onSelectColor(color: string) {
//     this.selectedColor = color;
//     console.log('Selected color:', color);
//   }

//   onSelectSize(size: string) {
//     this.selectedSize = size;
//     console.log('Selected size:', size);
//   }

//   go(item: any) {
//     this.global.set_getdata(item, this.selectedColor, this.selectedSize);
//     this.router.navigate(['cart']);
//   }

//   go2() {
//     this.router.navigate(['shop']);
//   }
// }




// import { Component, OnInit } from '@angular/core';
// import { register } from 'swiper/element';
// import { Router } from '@angular/router';
// import { GlobalService } from '../global.service';
// register();

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.page.html',
//   styleUrls: ['./product.page.scss'],
// })
// export class ProductPage implements OnInit {
//   public user: any;
//   // public col: any = [
//   //   { color: '#bebebe' },
//   //   { color: 'black' },
//   //   { color: '#0C29B9' },
//   //   { color: '#FF3333' },
//   // ];
//   // public sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL'];
//   public size:any
//   public selectedColor: string = '';
//   public selectedSize: string = '';

//   constructor(public router:Router,public global:GlobalService) {}

//   ngOnInit() {
//     // this.user = history.state.prodata;
//     this.global.Detaildata.subscribe(data =>{
//       this.user =data;
//     })
//     console.log(this.user)
//   }


//   onSelectColor(color: string) {
//     this.selectedColor = color;
    
//     console.log('Selected color:', color);
//   }

//   onSelectSize(size: string) {
    
//     this.selectedSize = size;
//     console.log('Selected size:', this.selectedSize);
//   }
  
//   go(item:any,){
//   // this.global.cart_Function(item)
//   // console.log(item)
//     this.router.navigate(['cart'])
//     this.global.set_getdata(item, this.selectedColor, this.selectedSize);

//   }
  
//   go2(){
//     this.router.navigate(['shop'])
//   }


  
  
// }
