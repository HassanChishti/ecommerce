import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage {
  formData = { email: '', password: '' }; // Object to store form data
  disableButton = true; // Variable to control button disabling
  remainingTime = 0; // Variable to hold the remaining time for button disabling
  showPassword = false; // Variable to toggle password visibility

  constructor(private router: Router, private alertController: AlertController, private alert: AlertService) {}

  home() {
    this.router.navigate(['home']);
  }

  async submitForm() {
    // Perform validation here, for example, checking email and password
    if (this.formData.email === 'ali@gmail.com' && this.formData.password === 'Ali2@gmail.com') {
      // If both email and password are correct, navigate to the next page
      this.router.navigate(['login']);
    } else {
      // Display alert message for incorrect email or password
      this.alert.presentAlert3('Error', 'Incorrect email or password');
    }
  }

  onFormDataChange() {
    // You can perform any additional logic here when form data changes
    this.validateEmail();
  }

  validateEmail() {
    // Email validation logic
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.formData.email)) {
      this.disableButton = true; // Disable button if email is not valid
    } else {
      this.validatePassword(); // Validate password if email is valid
    }
  }

  validatePassword() {
    // Password validation logic
    const password = this.formData.password;
    const hasCapital = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    if (password.length < 8 || !hasCapital || !hasLowercase || !hasNumber || !hasSymbol) {
      this.disableButton = true; // Disable button if password does not meet requirements
    } else {
      this.disableButton = false; // Enable button if password meets requirements
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
