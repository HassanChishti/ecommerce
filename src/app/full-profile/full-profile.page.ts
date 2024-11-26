import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { GlobalService } from '../global.service';
register();
@Component({
  selector: 'app-full-profile',
  templateUrl: './full-profile.page.html',
  styleUrls: ['./full-profile.page.scss'],
})
export class FullProfilePage implements OnInit {
  
  
  public announ: any[] = [];
  public view: any[]=[];
  public storie: any[]=[];
  public items: any[]=[];
  public catagori: any[] = [];
  public sale: any[]=[];
  public top: any[]=[];
  public just: any[]=[];
  constructor(public router: Router,
    private dataService: DataService,
    public global:GlobalService
  ) { }

  ngOnInit() {
    this.announ = this.dataService.announ;
    this.view = this.dataService.view;
    this.storie= this.dataService.storie;
    this.items=this.dataService.items;
    this.catagori = this.dataService.catagori;
    this.sale = this.dataService.sale;
    this.top= this.dataService.top;
    this.just=this.dataService.just;
}
  pro(data:any){
    // this.router.navigate(['product'],{state:{prodata:data}})
    this.router.navigate(['product'])
    this.global.det_getdata(data)
  }
  
}
