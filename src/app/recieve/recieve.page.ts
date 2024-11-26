import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-recieve',
  templateUrl: './recieve.page.html',
  styleUrls: ['./recieve.page.scss'],
})
export class RecievePage implements OnInit {
  constructor(public global: GlobalService) {
    // Load pendingItems and completeItems from localStorage, or initialize as empty arrays
    const pendingItems = localStorage.getItem('pendingItems');
    const completeItems = localStorage.getItem('completeItems');

    this.pendingItems = pendingItems ? JSON.parse(pendingItems) : [];
    this.completeItems = completeItems ? JSON.parse(completeItems) : [];
  }
  

  public data = true;
  public selectedbtn = 'first';
  public user: any[] = [];
  public price: any[] = [];
  public pendingItems: any[] = []; // For pending items
  public completeItems: any[] = []; // For complete items

  public cart1: any = [
    {
      img: '../../assets/img/IMG-20240326-WA0042.jpg'
    },
    {
      img: '../../assets/img/IMG-20240326-WA0035.jpg'
    }
  ];

  public third: any = [
    {
      img: '../../assets/img/IMG-20240326-WA0050.jpg'
    }
  ];

  public pro: any = [
    {
      text: 'Order 92287157'
    }
  ];

  firstbtn() {
    this.data = true;
    this.selectedbtn = 'first';
  }

  secondbtn() {
    this.data = false;
    this.selectedbtn = 'second';
  }

  deleteItem(item: any, listType: string) {
    if (listType === 'pending') {
      this.pendingItems = this.pendingItems.filter(i => i !== item);
      localStorage.setItem('pendingItems', JSON.stringify(this.pendingItems));
    } else if (listType === 'complete') {
      this.completeItems = this.completeItems.filter(i => i !== item);
      localStorage.setItem('completeItems', JSON.stringify(this.completeItems));
    }
    this.global.data_getdata([], []);
  }

  trackItem(item: any) {
    // Remove the item from pendingItems
    this.pendingItems = this.pendingItems.filter(i => i !== item);

    // Add the item to completeItems
    this.completeItems.push(item);

    // Save updated lists to localStorage
    localStorage.setItem('pendingItems', JSON.stringify(this.pendingItems));
    localStorage.setItem('completeItems', JSON.stringify(this.completeItems));
  }

  ngOnInit() {
    this.global.Comdata.subscribe(data => {
      this.user = data;
      this.pendingItems = [...data]; // Assuming all user data starts as pending
      console.log(this.user);
    });
    this.global.Bagcomdata.subscribe(price => {
      this.price = price;
    });
  }

  addData(newUser: any[], newPrice: any[]) {
    this.global.data_getdata(newUser, newPrice);
  }

  clearData(i: number) {
    this.user.splice(i, 1);
    localStorage.removeItem('comdata');
    localStorage.removeItem('bagcomdata');
    this.global.data_getdata([], []);
  }
}






// import { Component, OnInit } from '@angular/core';
// import { GlobalService } from '../global.service';

// @Component({
//   selector: 'app-recieve',
//   templateUrl: './recieve.page.html',
//   styleUrls: ['./recieve.page.scss'],
// })
// export class RecievePage implements OnInit {

//   constructor(
//     public global:GlobalService,
//   ) { }

//   public data = true;
//   public selectedbtn= 'first';

//   public user :any[]=[]
//   public price :any[]=[]

//   public cart1:any =[
//     {
//       img:'../../assets/img/IMG-20240326-WA0042.jpg'
//     },
//     {
//       img:'../../assets/img/IMG-20240326-WA0035.jpg'
//     }
//   ]
 
//   public third :any=[
//     {
//       img:'../../assets/img/IMG-20240326-WA0050.jpg'
//     }
//   ]

//   public pro: any=[
//     {
//       text:'Order 92287157'
//     }
//   ]
//   firstbtn(){
//     this.data=true;
//     this.selectedbtn='first'
//   }
//   secondbtn(){
//     this.data=false;
//     this.selectedbtn='second'
//   }
  // deleteItem(i: number) {
  //   this.user.splice(i, 1); 
  //   localStorage.removeItem('comdata');
  //   localStorage.removeItem('bagcomdata');
  //   this.global.data_getdata([], []);
  // }
  
//   ngOnInit() {
//     this.global.Comdata.subscribe(data => {
//       this.user = data;
//       console.log(this.user);
//     });
//     this.global.Bagcomdata.subscribe(price => {
//       this.price = price;
//     });
//   }

//   addData(newUser: any[], newPrice: any[]) {
//     this.global.data_getdata(newUser, newPrice);
//   }

//   clearData() {
//     localStorage.removeItem('comdata');
//     localStorage.removeItem('bagcomdata');
//     this.global.data_getdata([], []);
//   }


// }
