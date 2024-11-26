import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { GlobalService } from '../global.service';
register();
@Component({
  selector: 'app-flash-sale',
  templateUrl: './flash-sale.page.html',
  styleUrls: ['./flash-sale.page.scss'],
})
export class FlashSalePage implements OnInit {
  constructor(private animationCtrl: AnimationController,public router:Router,
    private dataService: DataService,
    public global:GlobalService,

   ) {}

  alertButtons: any[] = []; // Define alertButtons and setResult properties

  setResult(event: any) {
    // Implement the method logic
  }

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    if (!root) return; // Guard against 'root' being null

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    const animation = this.enterAnimation(baseEl);
  
    if (animation) {
      return animation.direction('reverse');
    } else {
      return null; 
    }
  };
 
  public bner: any[] = [];
  public dis: any[]=[];
  public top2: any[]=[];
  public price: any[]=[];
  public size: any[] = [];
  public col: any[]=[]; 

  ngOnInit() {

    this.bner = this.dataService.bner;
    this.dis = this.dataService.dis;
    this.top2= this.dataService.top2;
    this.price=this.dataService.price;
    this.col = this.dataService.col;

  }
pro(pri:any){
  // this.router.navigate(['product'],{state:{prodata:pri}})
  this.router.navigate(['product'])
  this.global.det_getdata(pri)

}



}
