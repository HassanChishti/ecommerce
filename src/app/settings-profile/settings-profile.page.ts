import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-profile',
  templateUrl: './settings-profile.page.html',
  styleUrls: ['./settings-profile.page.scss'],
})
export class SettingsProfilePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  shop(){
    this.router.navigate(['shop'])
  }
  
  wishlist(){
    this.router.navigate(['wishlist'])
  }
  flashsale(){
    this.router.navigate(['flash-sale'])
  }
  
  cart(){
    this.router.navigate(['cart'])
  }
  profile(){
    this.router.navigate(['full-profile'])
  }

}
