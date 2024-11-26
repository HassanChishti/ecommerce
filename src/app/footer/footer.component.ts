import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  public value = 0;
  private routerSubscription: Subscription | null = null;

  constructor(
    private router: Router,
    private globalService: GlobalService // Inject the service
  ) { 
    // Subscribe to the item count observable
    this.globalService.ItemCount.subscribe((value) => {
      this.value = value;
    });
  }

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is payment or receipt page
        if (event.urlAfterRedirects === '/recieve' || event.urlAfterRedirects === '/receipt') {
          this.globalService.resetCartData();
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  go() {
    this.router.navigate(['product']);
  }

  shop() {
    this.router.navigate(['shop']);
  }

  wishlist() {
    this.router.navigate(['wishlist']);
  }

  flashsale() {
    this.router.navigate(['flash-sale']);
  }

  cart() {
    this.router.navigate(['cart']);
  }

  profile() {
    this.router.navigate(['full-profile']);
  }
}




// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { GlobalService } from '../global.service';


// @Component({
//   selector: 'app-footer',
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.scss'],
// })
// export class FooterComponent  implements OnInit {
//   public value = 0;

//   constructor(
//     private router: Router,
//     private globalService: GlobalService // Inject the service
//   ) { 
//     // Subscribe to the item count observable
//     this.globalService.ItemCount.subscribe((value) => {
//       this.value = value;
//     });
//   }

//   ngOnInit() {}
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
