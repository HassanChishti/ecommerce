import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(  ) { 
    console.log('GlobalService initialized');
  }


  
private comdata = new BehaviorSubject<any[]>(this.getDataFromLocalStorage('comdata'));
public Comdata = this.comdata.asObservable();

private bagcomdata = new BehaviorSubject<any[]>(this.getDataFromLocalStorage('bagcomdata'));
public Bagcomdata = this.bagcomdata.asObservable();

private getDataFromLocalStorage(key: string): any[] {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

private setDataToLocalStorage(key: string, data: any[]): void {
  localStorage.setItem(key, JSON.stringify(data));
}



data_getdata(comdata: any[], bagcomdata: any[]): void {
  // Merge new comdata with existing comdata
  const currentComdata = this.comdata.getValue();
  comdata.forEach(newItem => {
    const existingIndex = currentComdata.findIndex(item => 
      item.itmname === newItem.itmname &&
       item.selectedImage === newItem.selectedImage &&
        item.itmimg === newItem.itmimg &&
        item.color === newItem.color &&
        item.size === newItem.size
    );
    if (existingIndex !== -1) {
      // Item already exists, update quantity
      currentComdata[existingIndex].contr += newItem.contr;
    } else {
      // Item does not exist, add new entry
      currentComdata.push(newItem);
    }
  });
  this.comdata.next(currentComdata);
  this.setDataToLocalStorage('comdata', currentComdata);

  // Merge new bagcomdata with existing bagcomdata
  const currentBagcomdata = this.bagcomdata.getValue();
  bagcomdata.forEach(newItem => {
    const existingIndex = currentBagcomdata.findIndex(item => 
      item.itmname === newItem.itmname &&
       item.selectedImage === newItem.selectedImage &&
        item.itmimg === newItem.itmimg &&
        item.color === newItem.color &&
      item.size === newItem.size
    );
    if (existingIndex !== -1) {
      // Item already exists, update quantity
      currentBagcomdata[existingIndex].contr += newItem.contr;
    } else {
      // Item does not exist, add new entry
      currentBagcomdata.push(newItem);
    }
  });
  this.bagcomdata.next(currentBagcomdata);
  this.setDataToLocalStorage('bagcomdata', currentBagcomdata);

  console.log(this.bagcomdata);
  
}



  private complete = new BehaviorSubject<any[]>([]);
  public Complete = this.complete.asObservable();

  private bagtotal = new BehaviorSubject<any[]>([]);
  public Bagtotal = this.bagtotal.asObservable();

  private adress = new BehaviorSubject<any[]>([]);
  public Adress = this.adress.asObservable();

  com_getdata(complete :any ,bagTotal:any , adress:any){
    this.complete.next(complete);
    this.bagtotal.next(bagTotal);
    this.adress.next(adress)
    console.log(this.adress,)
  }

  // Data from shop page to product page
  private detaildata = new BehaviorSubject<any[]>([]);
  public Detaildata = this.detaildata.asObservable();

  det_getdata(detaildata: any) {
    this.detaildata.next(detaildata);
  }

  // Data from product page to cart page
  private alldata = new BehaviorSubject<any[]>([]);
  public Alldata = this.alldata.asObservable();

  set_getdata(alldata: any, color: any, size: any) {
    const currentData = this.alldata.value;
    const existingItemIndex = currentData.findIndex(item => 
      item.itmname === alldata.itmname && 
      item.itmimg === alldata.itmimg &&
      item.selectedImage === alldata.selectedImage &&
      item.color === color &&
      item.size === size
    );

    if (existingItemIndex !== -1) {
      // If the item exists, increment the counter
      currentData[existingItemIndex].contr++;
    } else {
      // If the item does not exist, add it as a new item
      const newItem = { ...alldata, color, size, contr: 1 };
      currentData.push(newItem);
    }
    
    this.alldata.next([...currentData]);
    console.log('Updated cart:', currentData);

    // Update the item count
    this.updateItemCount(currentData.length);
  }

  // Item count
  private itemCount = new BehaviorSubject<number>(0);
  public ItemCount = this.itemCount.asObservable();

  // Method to update the item count
  public updateItemCount(count: number) {
    this.itemCount.next(count);
  }

  //data shop to clothig
  
  private catadata = new BehaviorSubject<any[]>([]);
  public Catadata = this.catadata.asObservable()

  cata_getdata(cata_getdata:any){
    this.catadata.next(cata_getdata)
    console.log(this.catadata)
  }

  
  private wishKey = 'wishlist'; // Key to store wishlist data in local storage
  private wish = new BehaviorSubject<any[]>(this.loadWishlistFromStorage()); // Load wishlist data from storage
  public Wish = this.wish.asObservable();

  addToWishlist(item: any) {
    let currentWishList = this.wish.value;
    currentWishList.push(item);
    this.updateWishlistInStorage(currentWishList);
    this.wish.next(currentWishList);
  }
  getWishlist(): any[] {
    return this.wish.value;
}

  removeFromWishlist(item: any) {
    let currentWishList = this.wish.value.filter(i => i !== item);
    this.updateWishlistInStorage(currentWishList);
    this.wish.next(currentWishList);
  }

  isInWishlist(item: any): boolean {
    return this.wish.value.some(i => i === item);
  }

  // Load wishlist data from local storage
  private loadWishlistFromStorage(): any[] {
    const wishlistData = localStorage.getItem(this.wishKey);
    return wishlistData ? JSON.parse(wishlistData) : [];
  }

  // Update wishlist data in local storage
  private updateWishlistInStorage(wishlist: any[]) {
    localStorage.setItem(this.wishKey, JSON.stringify(wishlist));
  }
  public resetCartData() {
    this.alldata.next([]);
    this.updateItemCount(0);
    // localStorage.removeItem('comdata');
    // localStorage.removeItem('bagcomdata');
  }
  


}

//es k oper


// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class GlobalService {

//   constructor() { }

//   // Data from shop page to product page
//   private detaildata = new BehaviorSubject<any[]>([]);
//   public Detaildata = this.detaildata.asObservable();

//   det_getdata(detaildata: any) {
//     this.detaildata.next(detaildata);
//   }

//   // Data from product page to cart page
//   private alldata = new BehaviorSubject<any[]>([]);
//   public Alldata = this.alldata.asObservable();

//   set_getdata(alldata: any, color: any, size: any) {
//     const currentData = this.alldata.value;
//     const existingItemIndex = currentData.findIndex(item => 
//       item.itmname === alldata.itmname && 
//       item.color === color && 
//       item.size === size
//     );

//     if (existingItemIndex !== -1) {
//       // If the item exists, increment the counter
//       currentData[existingItemIndex].contr++;
//     } else {
//       // If the item does not exist, add it as a new item
//       const newItem = { ...alldata, color, size, contr: 1 };
//       currentData.push(newItem);
//     }
    
//     this.alldata.next([...currentData]);
//     console.log('Updated cart:', currentData);
//   }
// }





// // global.service.ts
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class GlobalService {

//   constructor() { }

//   // Data from shop page to product page
//   private detaildata = new BehaviorSubject<any[]>([]);
//   public Detaildata = this.detaildata.asObservable();

//   det_getdata(detaildata: any) {
//     this.detaildata.next(detaildata);
//   }

//   // Data from product page to cart page
//   private alldata = new BehaviorSubject<any[]>([]);
//   public Alldata = this.alldata.asObservable();

//   set_getdata(alldata: any, color: any, size: any) {
//     const currentData = this.alldata.value;
//     const newItem = { ...alldata, color, size, contr: 1 };
//     this.alldata.next([...currentData, newItem]);
//     console.log('New item added:', newItem);
//   }
// }



// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class GlobalService {
  
//   constructor() { }

//   //data shop page to product page
//   private detaildata = new BehaviorSubject<any[]>([]);
//   public Detaildata =this.detaildata.asObservable();
//   det_getdata(detaildata:any){
//     this.detaildata.next(detaildata);
//   }
//   //data product page to cart page
//   private alldata = new BehaviorSubject<any[]>([]);
//   public Alldata = this.alldata.asObservable();

//   private color =new BehaviorSubject<any>('');
//   public Color = this.color.asObservable();

//   private size =new BehaviorSubject<any>('');
//   public Size = this.size.asObservable();

//   set_getdata(alldata:any, color:any, size:any){
//     this.alldata.next(alldata);
//     this.color.next(color);
//     this.size.next(size);
//     console.log(alldata)
//   }

  



//   private productDetail = new BehaviorSubject<any>('');
//   public ProductDetail = this.productDetail.asObservable();

//   productFunction(productDetail: any) {
//     console.log(productDetail);
//     this.productDetail.next(productDetail);
//   }
  

  
// }