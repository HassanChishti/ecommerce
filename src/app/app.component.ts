import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './global.service'; // Import the service

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public value = 0;

  constructor(
    private router: Router,
    private globalService: GlobalService // Inject the service
  ) {
    // Subscribe to the item count observable
    this.globalService.ItemCount.subscribe((value) => {
      this.value = value;
    });
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
