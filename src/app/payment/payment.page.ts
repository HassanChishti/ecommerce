import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

 
  constructor(
    public global:GlobalService,
    private modelController: ModalController,
    public router:Router

  ) { 
    this.global.ItemCount.subscribe((value) => {
      this.value = value;
    });
  }
  //model
  public user :any[]=[];
  public value = 0;
  public exprice =50;
  public adres :any []=[]
  public bagtotal :any[]=[]
  public shippingOption: string = 'standard'; // default shipping option
  public baseBagTotal :any // store the initial bag total

   public shippingAddress = {
    contact: +84932000000,
    eamil: "amandamorganexample.com",
  }
  public payment = {
    first: 1111111111111111,
    secnd: "Ahmad",
    date: 12,
    // forth: 1111,
    
  }

  

  ngOnInit() {
    this.global.Complete.subscribe(data =>{
      this.user = data;
      
      console.log(this.user)
    })
    this.global.Bagtotal.subscribe(bag=>{
        this.bagtotal =bag;
    })
    this.global.Adress.subscribe(adrs=>{
      this.adres =[adrs];
  })
  this.baseBagTotal = this.bagtotal; // store initial bag total
  }
  recive(user:any , ){
    this.router.navigate(['recieve'])
    this.global.data_getdata(user, this.bagtotal)
  }
  save() {
    this.shippingAddress;
    this.modelController.dismiss();
  }
  paymnt() {
    this.payment;
    this.modelController.dismiss();
  }

  selectShipping(option: string) {
    this.shippingOption = option;
    if (option === 'express') {
      this.bagtotal = this.baseBagTotal + this.exprice;
    } else {
      this.bagtotal = this.baseBagTotal;
    }
  }
  

}