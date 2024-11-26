import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public adress: any;
  public Grandtotal: any;
  public Shipping: any;
  public BagTotal: any;
  public user: any[] = [];
  public value = 0;

  public alert1: any = { msg: 'You have reached the maximum limit for this user.' };
  public alert2: any = { msg: 'Do you want to remove this user from the cart?' };

  public shippingAddress = {
    address: "freed town ",
    city: "lahore",
    postcode: 5700
  }

  constructor(
    private alertController: AlertController,
    private router: Router,
    private alert: AlertService,
    public global: GlobalService,
    private modelController: ModalController,
  ) {}

  ngOnInit() {
    this.global.Alldata.subscribe((data) => {
      this.user = data;
      this.cal();
      console.log('Cart data:', this.user);
    });
  }

  increment(i: number) {
    if (this.user[i].contr < 5) {
      this.user[i].contr++;
      this.cal();
    } else {
      this.alert.presentAlert(this.alert1, this.user, this.cal.bind(this), i);
    }
  }

  decrement(i: number) {
    if (this.user[i].contr > 0) {
      this.user[i].contr--;
      this.cal();
      if (this.user[i].contr === 0) {
        this.alert.presentAlert2(this.alert2, this.user, this.cal.bind(this), i);
      }
    }
  }

  deleteItem(i: number) {
    this.user.splice(i, 1); // Remove the item from the array
    this.cal(); // Recalculate totals
  }

  cal() {
    this.Shipping = 50;
    this.Grandtotal = 0;
    this.value = this.user.length; // Set the value to the number of items in the cart
    for (let i = 0; i < this.user.length; i++) {
      this.user[i].total = this.user[i].itmprice * this.user[i].contr;
      this.Grandtotal += this.user[i].total;
    }
    this.BagTotal = this.Shipping + this.Grandtotal;

    // Update the item count in the global service
    this.global.updateItemCount(this.value);
  }

  save() {
    this.shippingAddress;
    this.modelController.dismiss();
  }

  go() {
    this.router.navigate(['product']);
  }

  pay(pro:any,) {
    this.router.navigate(['payment']);
    this.global.com_getdata(pro, this.BagTotal,this.shippingAddress)
  }

}





// import { Component, OnInit } from '@angular/core';
// import { AlertController,ModalController } from '@ionic/angular';
// import { Router } from '@angular/router';
// import { AlertService } from '../alert.service';
// import { GlobalService } from '../global.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.page.html',
//   styleUrls: ['./cart.page.scss'],
// })
// export class CartPage implements OnInit {
//   public adress:any;
//   public Grandtotal: any;
//   public Shipping: any;
//   public BagTotal: any;
//   public user: any[] = [];
//   public value = 0;

//   public alert1: any = { msg: 'You have reached the maximum limit for this user.' };
//   public alert2: any = { msg: 'Do you want to remove this user from the cart?' };

//   public shippingAddress = {
//     address:"freed town ",
//     city:"lahore",
//     postcode:5700
//   }
  
//   constructor(
//     private alertController: AlertController,
//     private router: Router,
//     private alert: AlertService,
//     public global: GlobalService,
//     private modelController:ModalController,
//   ) {}

//   ngOnInit() {
//     this.global.Alldata.subscribe((data) => {
//       this.user = data;
//       this.cal();
//       console.log('Cart data:', this.user);
//     });
//   }

//   increment(i: number) {
//     if (this.user[i].contr < 5) {
//       this.user[i].contr++;
//       this.cal();
//     } else {
//       this.alert.presentAlert(this.alert1, this.user, this.cal.bind(this), i);
//     }
//   }

//   decrement(i: number) {
//     if (this.user[i].contr > 0) {
//       this.user[i].contr--;
//       this.cal();
//       if (this.user[i].contr === 0) {
//         this.alert.presentAlert2(this.alert2, this.user, this.cal.bind(this), i);
//       }
//     }
//   }

//   deleteItem(i: number) {
//     this.user.splice(i, 1); // Remove the item from the array
//     this.cal(); // Recalculate totals
//   }

//   cal() {
//     this.Shipping = 50;
//     this.Grandtotal = 0;
//     this.value = this.user.length; // Set the value to the number of items in the cart
//     for (let i = 0; i < this.user.length; i++) {
//       this.user[i].total = this.user[i].itmprice * this.user[i].contr;
//       this.Grandtotal += this.user[i].total;
//     }
//     this.BagTotal = this.Shipping + this.Grandtotal;
//   }

//   save() {
//     this.shippingAddress;
//     this.modelController.dismiss();
//   }

//   go() {
//     this.router.navigate(['product']);
//   }

//   shop() {
//     this.router.navigate(['shop']);
//   }

//   wishlist() {
//     this.router.navigate(['wishlist']);
//   }

//   flashsale() {
//     this.router.navigate(['flash-sale']);
//   }

//   cart() {
//     this.router.navigate(['cart']);
//   }

//   profile() {
//     this.router.navigate(['full-profile']);
//   }
// }





// // cart.page.ts
// import { Component, OnInit } from '@angular/core';
// import { AlertController } from '@ionic/angular';
// import { Router } from '@angular/router';
// import { AlertService } from '../alert.service';
// import { GlobalService } from '../global.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.page.html',
//   styleUrls: ['./cart.page.scss'],
// })
// export class CartPage implements OnInit {
//   public Grandtotal: any;
//   public Shipping: any;
//   public BagTotal: any;
//   public user: any[] = [];
//   public value = 0;

//   public alert1: any = { msg: 'You have reached the maximum limit for this user.' };
//   public alert2: any = { msg: 'Do you want to remove this user from the cart?' };

//   constructor(
//     private alertController: AlertController,
//     private router: Router,
//     private alert: AlertService,
//     public global: GlobalService
//   ) {}

//   ngOnInit() {
//     this.global.Alldata.subscribe((data) => {
//       this.user = data;
//       this.cal();
//       console.log('Cart data:', this.user);
//     });
//   }

//   increment(i: number) {
//     if (this.user[i].contr < 5) {
//       this.user[i].contr++;
//       this.cal();
//     } else {
//       this.alert.presentAlert(this.alert1, this.user, this.cal.bind(this), i);
//       let newItem = {
//         ...this.user[i],
//         contr: 1,
//       };
//       this.user.push(newItem);
//       this.cal();
//     }
//   }

//   decrement(i: number) {
//     if (this.user[i].contr > 0) {
//       this.user[i].contr--;
//       this.cal();
//       if (this.user[i].contr === 0) {
//         this.alert.presentAlert2(this.alert2, this.user, this.cal.bind(this), i);
//       }
//     }
//   }
//   deleteItem(i: number) {
//     this.user.splice(i, 1); // Remove the item from the array
//     this.cal(); // Recalculate totals
//   }


//   cal() {
//     this.Shipping = 50;
//     this.Grandtotal = 0;
//     this.value = this.user.length; // Set the value to the number of items in the cart
//     for (let i = 0; i < this.user.length; i++) {
//       this.user[i].total = this.user[i].itmprice * this.user[i].contr;
//       this.Grandtotal += this.user[i].total;
//     }
//     this.BagTotal = this.Shipping + this.Grandtotal;
//   }

//   go() {
//     this.router.navigate(['product']);
//   }

//   shop() {
//     this.router.navigate(['shop']);
//   }

//   wishlist() {
//     this.router.navigate(['wishlist']);
//   }

//   flashsale() {
//     this.router.navigate(['flash-sale']);
//   }

//   cart() {
//     this.router.navigate(['cart']);
//   }

//   profile() {
//     this.router.navigate(['full-profile']);
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { AlertController } from '@ionic/angular'; // Import AlertController
// import { Router } from '@angular/router'; // Import Router
// import { AlertService } from '../alert.service';
// import { GlobalService } from '../global.service';
// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.page.html',
//   styleUrls: ['./cart.page.scss'],
// })
// export class CartPage implements OnInit {
//   public Grandtotal: any;
//   public Shipping: any;
//   public BagTotal: any;
//   public user:any;
//   public size:any;
//   public color:any
//   public value =0;
//   public user: any = [
//     {
//       total: 0,
//       price: 100,
//       contr: 0,
//     },
    
//   ];

//   constructor(
//     private alertController: AlertController,
//     private router: Router, // Inject Router;
//     private alert: AlertService,
//     public global:GlobalService,
//   ) {}

//   ngOnInit() {
//     this.cal();
//     this.global.CartDetail.subscribe(res => {
//       this.user = res; 
//       // console.log(this.receiver);
//     }); 
//     this.global.Size.subscribe(data =>{
//       this.size=data
//     });
//     this.global.Color.subscribe(data =>{
//       this.color=data
//     });
//   }

//   increment(i: any) {
//     if (this.user[i].contr < 5) {
//       this.user[i].contr++;
//       this.cal();
//     } else {
//       // Display alert when limit exceeds 5
//       this.alert.presentAlert(this.alert1, this.user, this.cal.bind(this), i);
      
//       // Add a new cart with the same items and updated price
//       let newItem = {
//         img: this.user[i].img,
//         name: 'Lorem ipsum dolor sit, amet consectetur',
//         total: 0,
//         price: this.user[i].price, // Use the same price as the existing user
//         contr: 1, // Set contr to 1 as it's the first user added
//       };
//       this.user.push(newItem);
//       this.cal(); // Recalculate total
//     }
//   }

//   decrement(i: any) {
//     if (this.user[i].contr > 0) {
//       this.user[i].contr--;
//       this.cal();
//       if (this.user[i].contr == 0) {
//         // Display alert when limit approaches 0
//         this.alert.presentAlert2(this.alert2, this.user, this.cal.bind(this), i);
//       }
//     }
//   }
  

//   cal() {
//     this.Shipping = 50;
//     this.Grandtotal = 0;
//     for (let i = 0; i < this.user.length; i++) {
//       this.user[i].total = this.user[i].price * this.user[i].contr;
//       this.Grandtotal += this.user[i].total;
//     }
//     this.BagTotal = this.Shipping + this.Grandtotal;
//   }

//   public alert1: any = { msg: "You have reached the maximum limit for this user." };
//   public alert2: any = { msg: "Do you want to remove this user from the cart?" };

//   go(){
//     this.router.navigate(['product'])
//   }

//   shop(){
//     this.router.navigate(['shop'])
//   }
  
//   wishlist(){
//     this.router.navigate(['wishlist'])
//   }
//   flashsale(){
//     this.router.navigate(['flash-sale'])
//   }
  
//   cart(){
//     this.router.navigate(['cart'])
//   }
//   profile(){
//     this.router.navigate(['full-profile'])
//   }


// }





// increment(i: any) {
//   if (this.user[i].contr < 5) {
//     this.user[i].contr++;
//     this.cal();
//   } else {
//     // Display alert when limit exceeds 5
//     this.alert.presentAlert(this.alert1, this.user, this.cal.bind(this), i);
    
//     // Add a new cart with the same items and updated price
//     let newItem = {
//       img: this.user[i].img,
//       name: 'Lorem ipsum dolor sit, amet consectetur',
//       total: 0,
//       price: this.user[i].price, // Use the same price as the existing user
//       contr: 1, // Set contr to 1 as it's the first user added
//     };
//     this.user.push(newItem);
//     this.cal(); // Recalculate total
//   }
// }

// decrement(i: any) {
//   if (this.user[i].contr > 0) {
//     this.user[i].contr--;
//     this.cal();
//     if (this.user[i].contr == 0) {
//       // Remove the cart when the limit approaches 0
//       this.user.splice(i, 1);
//     }
//   }
// }



 // alerts(){
  //   this.alert.presentAlert2(this.alert1)
  // }
  // alertss(){
  //   this.alert.presentAlert2(this.alert2)
  // }



  // public alertButtons = [
  //   {
  //     text: 'Okay',
  //     cssClass: 'alert-button-confirm'
  //   }
  // ];

//   async presentAlert() {
//     const alert = await this.alertController.create({
//       cssClass: 'custom-alert',
//       message: `
//         <div class="alert-main">
        
//         <div class="alert2-main">
//         <div class="alert2-submain">
//         <div class="alert2-submain2">
//         <div class="alert2-submain3">
//         <ion-icon class="alert2-icon" name="alert-outline"></ion-icon>
//         </div>
//         </div>
//         </div>
//         </div>
          
//           <p class="custom-text">Do you want to add this user from the cart?</p>
          
//        </div>
// `,
//       buttons: this.alertButtons // Use alertButtons property here
//     });
//     await alert.present();
//   }

//   async presentAlert2(i: number) {
//     const alert = await this.alertController.create({
//       cssClass: 'custom-alert',
//       message: `
//         <div class="alert-main">
        
//         <div class="alert2-main">
//         <div class="alert2-submain">
//         <div class="alert2-submain2">
//         <div class="alert2-submain3">
//         <ion-icon class="alert2-icon" name="alert-outline"></ion-icon>
//         </div>
//         </div>
//         </div>
//         </div>
          
//           <p class="custom-text">Do you want to remove this user from the cart?</p>
          
//        </div>
// `,
//       buttons: [
//         {
//           text: 'No',
//           role: 'cancel',
//           cssClass: 'secondary',
//           handler: () => {
//             // Reset contr to 1
//             this.user[i].contr = 1;
//             this.cal();
//           }
//         },
//         {
//           text: 'Yes',
//           cssClass: 'alert-button-confirm',
//           handler: () => {
//             // Remove user from cart
//             this.user.splice(i, 1);
//             this.cal();
//           }
//         }
//       ]
//     });
//     await alert.present();
//   }




// import { Component, OnInit } from '@angular/core';
// import { AlertController } from '@ionic/angular'; // Import AlertController
// import { Router } from '@angular/router'; // Import Router
// import { AlertService } from '../alert.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.page.html',
//   styleUrls: ['./cart.page.scss'],
// })
// export class CartPage implements OnInit {
//   public Grandtotal: any;
//   public Shipping: any;
//   public BagTotal: any;
//   public user: any = [
//     {
//       img: '../../assets/img/IMG-20240326-WA0050.jpg',
//       name: 'Lorem ipsum dolor sit, amet consectetur',
//       total: 0,
//       price: 50,
//       contr: 0,
//     },
//     {
//       img: '../../assets/img/IMG-20240326-WA0050.jpg',
//       name: 'Lorem ipsum dolor sit, amet consectetur',
//       total: 0,
//       price: 100,
//       contr: 0,
//     },
//     // {
//     //   img: '../../assets/img/IMG-20240326-WA0050.jpg',
//     //   name: 'Lorem ipsum dolor sit, amet consectetur',
//     //   total: 0,
//     //   price: 200,
//     //   contr: 0,
//     // },
//   ];

//   // Define alertButtons property
//   public alertButtons = [
//     {
//       text: 'Okay',
//       cssClass: 'alert-button-confirm'
//     }
//   ];

//   constructor(
//     private alertController: AlertController,
//     private router: Router , // Inject Router
//     private alert:AlertService
//   ) { }

//   ngOnInit() {
//     this.cal();
//   }

//   increment(i: any) {
//     if (this.user[i].contr < 5) {
//       this.user[i].contr++;
//       this.cal();
//     } else {
//       // Display alert when limit exceeds 5
//       this.presentAlert();
//       // Add a new user to the cart
//       this.user.push({
//         img: '../../assets/img/IMG-20240326-WA0050.jpg',
//         name: 'Lorem ipsum dolor sit, amet consectetur',
//         total: 0,
//         price: 50,
//         contr: 1, // Set contr to 1 as it's the first user added
//       });
//       this.cal(); // Recalculate total
//     }
//   }

//   decrement(i: any) {
//     if (this.user[i].contr > 0) {
//       this.user[i].contr--;
//       this.cal();
//       if (this.user[i].contr == 0) {
//         // Display alert when limit approaches 0
//         this.presentAlert2(i);
//       }
//     }
//   }

//   cal() {
//     this.Shipping = 50;
//     this.Grandtotal = 0;
//     for (let i = 0; i < this.user.length; i++) {
//       this.user[i].total = this.user[i].price * this.user[i].contr;
//       this.Grandtotal += this.user[i].total;
//     }
//     this.BagTotal = this.Shipping + this.Grandtotal;
//   }

//   async presentAlert() {
//     const alert = await this.alertController.create({
//       cssClass: 'custom-alert',
//       message: `
//         <div class="alert-main">
        
//         <div class="alert2-main">
//         <div class="alert2-submain">
//         <div class="alert2-submain2">
//         <div class="alert2-submain3">
//         <ion-icon class="alert2-icon" name="alert-outline"></ion-icon>
//         </div>
//         </div>
//         </div>
//         </div>
          
//           <p class="custom-text">Do you want to add this user from the cart?</p>
          
//        </div>
// `,
//       buttons: this.alertButtons // Use alertButtons property here
//     });
//     await alert.present();
//   }

//   async presentAlert2(i: number) {
//     const alert = await this.alertController.create({
//       cssClass: 'custom-alert',
//       message: `
//         <div class="alert-main">
        
//         <div class="alert2-main">
//         <div class="alert2-submain">
//         <div class="alert2-submain2">
//         <div class="alert2-submain3">
//         <ion-icon class="alert2-icon" name="alert-outline"></ion-icon>
//         </div>
//         </div>
//         </div>
//         </div>
          
//           <p class="custom-text">Do you want to remove this user from the cart?</p>
          
//        </div>
// `,
//       buttons: [
//         {
//           text: 'No',
//           role: 'cancel',
//           cssClass: 'secondary',
//           handler: () => {
//             // Reset contr to 1
//             this.user[i].contr = 1;
//             this.cal();
//           }
//         },
//         {
//           text: 'Yes',
//           cssClass: 'alert-button-confirm',
//           handler: () => {
//             // Remove user from cart
//             this.user.splice(i, 1);
//             this.cal();
//           }
//         }
//       ]
//     });
//     await alert.present();
//   }


//   public alert1:any={msg:"successful"}
//   public alert2:any={msg:"unsuccessful"}

//   alerts(){
//     this.alert.presentAlert2(this.alert1)
//   }
//   alertss(){
//     this.alert.presentAlert2(this.alert2)
//   }



// }






// <img 
//           src="../../assets/img/Screenshot_2024-04-24_060651-removebg-preview.png"
//           alt="Image" 
//           class="custom-image"
//           />


// import { Component, OnInit } from '@angular/core';
// import { AlertController } from '@ionic/angular'; // Import AlertController
// import { Router } from '@angular/router'; // Import Router

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.page.html',
//   styleUrls: ['./cart.page.scss'],
// })
// export class CartPage implements OnInit {
//   public Grandtotal: any;
//   public Shipping: any;
//   public BagTotal: any;
//   public user: any = [
//     {
//       img: '../../assets/img/IMG-20240326-WA0050.jpg',
//       name: 'Lorem ipsum dolor sit, amet consectetur',
//       total: 0,
//       price: 50,
//       contr: 0,
//     },
//     {
//       img: '../../assets/img/IMG-20240326-WA0050.jpg',
//       name: 'Lorem ipsum dolor sit, amet consectetur',
//       total: 0,
//       price: 100,
//       contr: 0,
//     },
//     {
//       img: '../../assets/img/IMG-20240326-WA0050.jpg',
//       name: 'Lorem ipsum dolor sit, amet consectetur',
//       total: 0,
//       price: 200,
//       contr: 0,
//     },
//   ];

//   // Define alertButtons property
//   public alertButtons = [
//     {
//       text: 'Okay',
//       cssClass: 'alert-button-confirm'
//     }
//   ];

//   constructor(
//     private alertController: AlertController,
//     private router: Router // Inject Router
//   ) { }

//   ngOnInit() {
//     this.cal();
//   }

//   increment(i: any) {
//     if (this.user[i].contr < 5) {
//       this.user[i].contr++;
//       this.cal();
//     } else {
//       // Display alert when limit exceeds 5
//       this.presentAlert();
//       // Add a new user to the cart
//       this.user.push({
//         img: '../../assets/img/IMG-20240326-WA0050.jpg',
//         name: 'Lorem ipsum dolor sit, amet consectetur',
//         total: 0,
//         price: 50,
//         contr: 1, // Set contr to 1 as it's the first user added
//       });
//       this.cal(); // Recalculate total
//     }
//   }

//   decrement(i: any) {
//     if (this.user[i].contr > 0) {
//       this.user[i].contr--;
//       this.cal();
//     } else {
//       // Display alert when limit is 0
//       this.presentAlert2();
//     }
//   }

//   cal() {
//     this.Shipping = 50;
//     this.Grandtotal = 0;
//     for (let i = 0; i < this.user.length; i++) {
//       this.user[i].total = this.user[i].price * this.user[i].contr;
//       this.Grandtotal += this.user[i].total;
//     }
//     this.BagTotal = this.Shipping + this.Grandtotal;
//   }

//   async presentAlert() {
//     const alert = await this.alertController.create({
//       cssClass: 'custom-alert',
//       header: '!',
//       message: 'You have reached the maximum limit for this user.',
//       buttons: this.alertButtons // Use alertButtons property here
//     });
//     await alert.present();
//   }

//   async presentAlert2() {
//     const alert = await this.alertController.create({
//       cssClass: 'custom-alert',
//       header: 'Alert',
//       message: 'No more products',
//       buttons: this.alertButtons // Use alertButtons property here
//     });
//     await alert.present();
//   }
// }
































// import { Component, OnInit } from '@angular/core';
// import { register } from 'swiper/element';

// register();
// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.page.html',
//   styleUrls: ['./cart.page.scss'],
// })
// export class CartPage implements OnInit {
//   public Grandtotal:any;
//   public Shipping:any;
//   public BagTotal:any;
//   public user:any=[
//     {
//       img:'../../assets/img/IMG-20240326-WA0050.jpg',
//       name:'Lorem ipsum dolor sit, amet consectetur',
//       total:0,
//       price:50,
//       contr:0,
//     },
//     {
//       img:'../../assets/img/IMG-20240326-WA0050.jpg',
//       name:'Lorem ipsum dolor sit, amet consectetur',
//       total:0,
//       price:100,
//       contr:0,
//     },
//     {
//       img:'../../assets/img/IMG-20240326-WA0050.jpg',
//       name:'Lorem ipsum dolor sit, amet consectetur',
//       total:0,
//       price:200,
//       contr:0,
//     },
//   ]
// //alert
//   public alertButtons = [
    
//     {
//       text: 'Okay',
//       cssClass: 'alert-button-confirm',
//     },
   
//   ];
  
// //   increment(i:any){
// //    if(this.user[i].contr<5)
// // this.user[i].contr++;
// //   }
// //   decrement(i:any){
// //       if (this.user[i].contr > 0) {
// //         this.user[i].contr--
// //       }
// //   }

//   increment(i:any){
//     if(this.user[i].contr < 5)
//     {
//       this.user[i].contr++
//       this.cal()
     
//     }
//   }
//   decrement(i:any){
//    if(this.user[i].contr > 0){
//     this.user[i].contr--
//     this.cal()
//    }
//   }
//   cal()
//   {
//     this.Shipping=50;
//     this.Grandtotal = 0;
//     for(let i=0;i<this.user.length;i++)
//     {
//       this.user[i].total = this.user[i].price*this.user[i].contr;
//     this.Grandtotal = this.Grandtotal+this.user[i].total;
//     }
//     this.BagTotal= this.Shipping + this.Grandtotal
//   }
//   constructor() { }

//   ngOnInit() {
//     this.cal()
//   }

// }


