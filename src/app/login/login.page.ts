import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public alertButtons = [
    
    {
      text: 'Okay',
      cssClass: 'alert-button-confirm',
    },
   
  ];
  constructor() { }

  ngOnInit() {
  }

}
