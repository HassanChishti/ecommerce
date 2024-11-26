import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
register();
@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.page.html',
  styleUrls: ['./clothing.page.scss'],
})
export class ClothingPage implements OnInit {
//model ts

constructor(private animationCtrl: AnimationController,public router:Router,
  public global: GlobalService,

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

public top:any =[
  {
    img:"../../assets/img/download (2).png",
    text:'Dresses'
  },
  {
    img:"../../assets/img/download (4).png",
    text:'Pants'
  },
  {
    img:"../../assets/img/download (5).png",
    text:'Skirts'
  },
  {
    img:"../../assets/img/download (6).png",
    text:'Shorts'
  },
  {
    img:"../../assets/img/download (7).png",
    text:'Jackets'
  },
  {
    img:"../../assets/img/download (2).png",
    text:'Hoodies'
  },
  {
    img:"../../assets/img/download (4).png",
    text:'Shirts'
  },
  {
    img:"../../assets/img/download (5).png",
    text:'Polo'
  },
  {
    img:"../../assets/img/download (6).png",
    text:'T-shirts'
  },
  {
    img:"../../assets/img/download (7).png",
    text:'Tunic'
  }
]
public size:any=[
  {
    text:'XS'
  },
  {
    text:'S'
  },
  {
    text:'M'
  },
  {
    text:'L'
  },
  {
    text:'XL'
  },
  {
    text:'2XL'
  }
]

public col: any = [
  {
    color: '#bebebe' 
  },
  {
    color: 'black' 
  },
  {
    color: '#0C29B9' 
  },
  {
    color: '#FF3333' 
  },
  {
    color: '#0CA8B9' 
  },
  {
    color: '#E4A719' 
  },  
  {
    color: '#9D3CB9' 
  },
  {
    color: 'red' 
  },
  {
    color: 'black' 
  },
  {
    color: '#9D3CB9' 
  },
  {
    color: '#0C29B9' 
  }
  ];
  public price:any=[
  {
    pri:'150',
    pri1:'10'
  }
  ]


  public swpr:any=[
    {
      itmimg:'../../assets/img/IMG-20240326-WA0026.jpg',
      itmname:'Adress',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0029.jpg',
      itmname:'Pants',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0051.jpg',
      itmname:'Skirts',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0026.jpg',
      itmname:'Shorts',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0026.jpg',
      itmname:'Jackets',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0051.jpg',
      itmname:'Hoodies',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0026.jpg',
      itmname:'Shirts',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0052.jpg',
      itmname:'Polo',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0026.jpg',
      itmname:'T-shirts',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0028.jpg',
      itmname:'Tunic',
      itmprice:'17,00'
    },
  ]
  public swpr2:any=[
    {
      itmimg:'../../assets/img/IMG-20240326-WA0052.jpg',
      itmname:'Adress',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0029.jpg',
      itmname:'Pants',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0035.jpg',
      itmname:'Skirts',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0029.jpg',
      itmname:'Shorts',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0026.jpg',
      itmname:'Jackets',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0035.jpg',
      itmname:'Hoodies'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0029.jpg',
      itmname:'Shirts',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0052.jpg',
      itmname:'Polo',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0029.jpg',
      itmname:'T-shirts',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0035.jpg',
      itmname:'Tunic',
      itmprice:'17,00'
    },
  ]
  public items:any=[
    {
      itmimg:'../../assets/img/IMG-20240326-WA0052.jpg',
      itmname:'Lorem ipsum dolor sit',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0051.jpg',
      itmname:'Lorem ipsum dolor sit',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0035.jpg',
      itmname:'Lorem ipsum dolor sit',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0026.jpg',
      itmname:'Lorem ipsum dolor sit',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0029.jpg',
      itmname:'Lorem ipsum dolor sit',
      itmprice:'17,00'
    },
    {
      itmimg:'../../assets/img/IMG-20240326-WA0051.jpg',
      itmname:'Lorem ipsum dolor sit',
      itmprice:'17,00'
    },

  ]
  // constructor() { }
  public user :any[]=[]
  ngOnInit() {
    this.global.Catadata.subscribe((data) => {
      this.user = [data];
    });
    console.log( this.user);
  }
pro(item:any, imageKey: string){
  const selectedImage = item[imageKey];
    const itemData = {
      ...item,
      selectedImage
    };
  this.router.navigate(['product'])
  this.global.det_getdata(itemData)
}

}
