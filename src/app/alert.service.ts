import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular'; 

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertController:AlertController) { }
  public alertButtons = [
    {
      text: 'Okay',
      cssClass: 'alert-button-confirm'
    }
  ];
  
  async presentAlert(te: any, item: any[], cal: () => void, i: number) {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert',
      message: `
        <div class="alert-main">
          <div class="alert2-main">
            <div class="alert2-submain">
              <div class="alert2-submain2">
                <div class="alert2-submain3">
                  <ion-icon class="alert2-icon" name="alert-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
          <p class="custom-text">${te.msg}</p>
        </div>
      `,
      buttons: this.alertButtons
    });
    await alert.present();
  }
  async presentAlert3(title: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert',
      message: `
        <div class="alert-main">
          <div class="alert2-main">
            <div class="alert2-submain">
              <div class="alert2-submain2">
                <div class="alert2-submain3">
                  <ion-icon class="alert2-icon" name="alert-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
          <p class="custom-text">Wrong Password or Email</p>
        </div>
      `,
      buttons: this.alertButtons
    });
    await alert.present();
  }


  async presentAlert2(te: any, item: any[], cal: () => void, i: number) {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert',
      message: `
        <div class="alert-main">
          <div class="alert2-main">
            <div class="alert2-submain">
              <div class="alert2-submain2">
                <div class="alert2-submain3">
                  <ion-icon class="alert2-icon" name="alert-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
          <p class="custom-text">${te.msg}</p>
        </div>
      `,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            item[i].contr = 1;
            cal();
          }
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          handler: () => {      
            item.splice(i, 1);
            cal();
              }
        }
      ]
    });
    await alert.present();
  }
  
}









// import { Injectable } from '@angular/core';
// import { AlertController } from '@ionic/angular'; 

// @Injectable({
//   providedIn: 'root'
// })
// export class AlertService {

//   constructor(public alertController:AlertController) { }


//   async presentAlert2(te:any) {
//     const alert = await this.alertController.create({
//       cssClass: 'custom-alert',
//       message: `
//         <div class="alert-main">
        
//         <div class="alert2-main">
//         <div class="alert2-submain">
//         <div class="alert2-submain2">
//         <div class="alert2-submain3">
//         <ion-icon class="alert2-icon" name="alert-outline"></ion-icon>
//         </div>
//         </div>
//         </div>
//         </div>
          
//           <p class="custom-text">Do you want to add this item from the cart?</p>
          
//        </div>
// `,
//       // message:te.msg,
//       buttons: [
//         {
//           text: 'No',
//           role: 'cancel',
//           cssClass: 'secondary',
//           handler: () => {
           
//           }
//         },
//         {
//           text: 'Yes',
//           cssClass: 'alert-button-confirm',
//           handler: () => {          }
//         }
//       ]
//     });
//     await alert.present();
//   }


// }
