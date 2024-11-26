import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //cart
  // value:Array<any>;
  //full profile
  announ: Array<any>;
  view: Array<any>;
  storie: Array<any>;
  items: Array<any>;
  catagori: Array<any>;
  sale: Array<any>;
  top: Array<any>;
  just: Array<any>;

  //shop
  banr: Array<any>
  items1: Array<any>;
  catagori1: Array<any>;
  sale1: Array<any>;
  top1: Array<any>;
  just1: Array<any>;

  //flash-sale
  bner: Array<any>;
  dis: Array<any>;
  top2: Array<any>;
  price: Array<any>;
  size: Array<any>;
  col: Array<any>;


  constructor() {

    //full profile

    this.announ = [
      {
        name: 'Announcement',
        detl: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus',
        detl2: 'libero ac vulputate.',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        name: 'Announcement',
        detl: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus',
        detl2: 'libero ac vulputate.',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        name: 'Announcement',
        detl: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus',
        detl2: 'libero ac vulputate.',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
    ]
    this.view = [
      {
        img: '../../assets/img/download (2).png',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        img: '../../assets/img/download (4).png',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        img: '../../assets/img/download (5).png',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        img: '../../assets/img/download (6).png',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        img: '../../assets/img/download (7).png',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        img: '../../assets/img/download (2).png',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        img: '../../assets/img/download (4).png',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        img: '../../assets/img/download (5).png',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        img: '../../assets/img/download (6).png',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        img: '../../assets/img/download (7).png',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
    ]
    this.storie = [
      {
        img: '../../assets/img/storie1.png'
      },
      {
        img: '../../assets/img/storie2.png'
      },
      {
        img: '../../assets/img/storie3.png'
      },
      {
        img: '../../assets/img/storie2.png'
      },
      {
        img: '../../assets/img/storie3.png'
      },
      {
        img: '../../assets/img/storie2.png'
      },
      {
        img: '../../assets/img/storie3.png'
      },
    ]
    this.items = [
      {
        itmimg: '../../assets/img/IMG-20240326-WA0052.jpg',
        itmname: 'etc',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0039.jpg',
        itmname: 'sit',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0035.jpg',
        itmname: 'sit',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0042.jpg',
        itmname: 'Lorem ipsum',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0052.jpg',
        itmname: 'dolor sit',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0039.jpg',
        itmname: 'Lorem ',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0035.jpg',
        itmname: 'sit',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },

    ]

    this.catagori = [
      {
        cataimg1: '../../assets/img/IMG-20240326-WA0047.jpg',
        cataimg2: '../../assets/img/IMG-20240326-WA0029.jpg',
        cataimg3: '../../assets/img/IMG-20240326-WA0026.jpg',
        cataimg4: '../../assets/img/IMG-20240326-WA0046.jpg',
        cataname: 'Clothing',
        cataprice: 109,
        cataimg5: '../../assets/img/IMG-20240326-WA0030.jpg',
        cataimg6: '../../assets/img/IMG-20240326-WA0023.jpg',
        cataimg7: '../../assets/img/IMG-20240326-WA0027.jpg',
        cataimg8: '../../assets/img/IMG-20240326-WA0025.jpg',
        cataname2: 'Shoes',
        cataprice2: 530,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,

      },
      {
        cataimg1: '../../assets/img/IMG-20240326-WA0033.jpg',
        cataimg2: '../../assets/img/IMG-20240326-WA0024.jpg',
        cataimg3: '../../assets/img/IMG-20240326-WA0032.jpg',
        cataimg4: '../../assets/img/IMG-20240326-WA0031.jpg',
        cataname: 'Bags',
        cataprice: 87,
        cataimg5: '../../assets/img/IMG-20240326-WA0034.jpg',
        cataimg6: '../../assets/img/IMG-20240326-WA0043.jpg',
        cataimg7: '../../assets/img/IMG-20240326-WA0048.jpg',
        cataimg8: '../../assets/img/IMG-20240326-WA0041.jpg',
        cataname2: 'Lingerie',
        cataprice2: 218,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },

    ]
    this.sale = [
      {
        // salimg:'../../assets/img/IMG-20240326-WA0045.jpg'
        itmimg: '../../assets/img/IMG-20240326-WA0045.jpg',
        itmname: 'Lorem',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0040.jpg',
        itmname: 'ipsum',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0038.jpg',
        itmname: 'dolor',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0037.jpg',
        itmname: 'sit',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0036.jpg',
        itmname: 'Lorem ipsum dolor sit',
        itmprice: '17,00',
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0044.jpg',
        itmname: 'ipsum',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
    ]
    this.top = [
      {
        itmimg: '../../assets/img/IMG-20240326-WA0042.jpg',
        itmname: 'sit',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0051.jpg',
        itmname: 'Lorem 1',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0051.jpg',
        itmname: 'Lorem 2',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0042.jpg',
        itmname: 'Lorem 3',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0051.jpg',
        itmname: 'Lorem 4',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0042.jpg',
        itmname: 'Lorem 5',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0051.jpg',
        itmname: 'Lorem 6',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0042.jpg',
        itmname: 'Lorem 7',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0051.jpg',
        itmname: 'Lorem 8',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0052.jpg',
        itmname: 'Lorem 9',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
    ]
    this.just = [
      {
        itmimg: '../../assets/img/IMG-20240326-WA0052.jpg',
        itmname: 'dolor',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0051.jpg',
        itmname: 'dolor',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0050.jpg',
        itmname: 'dolor',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0042.jpg',
        itmname: 'dolor',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0035.jpg',
        itmname: 'dolor',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0039.jpg',
        itmname: 'dolor',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
    ]


    //shop
    this.banr = [
      {
        banrimg: '../../assets/img/1.jpg'

      },
      {
        banrimg: '../../assets/img/1.jpg'
      },
      {
        banrimg: '../../assets/img/1.jpg'
      },
      {
        banrimg: '../../assets/img/1.jpg'
      },
    ]
    this.catagori1 = [
      {
        cataimg1: '../../assets/img/IMG-20240326-WA0047.jpg',
        cataimg2: '../../assets/img/IMG-20240326-WA0029.jpg',
        cataimg3: '../../assets/img/IMG-20240326-WA0026.jpg',
        cataimg4: '../../assets/img/IMG-20240326-WA0046.jpg',
        itmname: 'Clothing',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        cataimg1: '../../assets/img/IMG-20240326-WA0030.jpg',
        cataimg2: '../../assets/img/IMG-20240326-WA0023.jpg',
        cataimg3: '../../assets/img/IMG-20240326-WA0027.jpg',
        cataimg4: '../../assets/img/IMG-20240326-WA0025.jpg',
        itmname: 'Shoes',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        cataimg1: '../../assets/img/IMG-20240326-WA0023.jpg',
        cataimg2: '../../assets/img/IMG-20240326-WA0024.jpg',
        cataimg3: '../../assets/img/IMG-20240326-WA0032.jpg',
        cataimg4: '../../assets/img/IMG-20240326-WA0031.jpg',
        itmname: 'Bags',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        cataimg1: '../../assets/img/IMG-20240326-WA0034.jpg',
        cataimg2: '../../assets/img/IMG-20240326-WA0043.jpg',
        cataimg3: '../../assets/img/IMG-20240326-WA0048.jpg',
        cataimg4: '../../assets/img/IMG-20240326-WA0041.jpg',
        itmname: 'Lingerie',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        cataimg1: '../../assets/img/IMG-20240327-WA0013.jpg',
        cataimg2: '../../assets/img/IMG-20240327-WA0016.jpg',
        cataimg3: '../../assets/img/IMG-20240327-WA0019.jpg',
        cataimg4: '../../assets/img/IMG-20240327-WA0020.jpg',
        itmname: 'Watch',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        cataimg1: '../../assets/img/IMG-20240327-WA0018.jpg',
        cataimg2: '../../assets/img/IMG-20240327-WA0014.jpg',
        cataimg3: '../../assets/img/IMG-20240327-WA0017.jpg',
        cataimg4: '../../assets/img/IMG-20240327-WA0012.jpg',
        itmname: 'Hoodies',
        quantity: 1,
        itmprice: 2200,
        total: 0,
        price: 0,
        contr: 0,
      },
    ]
    this.top1 = [
      {
        itmimg: '../../assets/img/IMG-20240326-WA0024.jpg',
        itmname: 'Shoes',
        itmprice: 1700,
        quantity: 1,
      },
      {
        itmimg: '../../assets/img/IMG-20240327-WA0018.jpg',
        itmname: 'Shoes',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240327-WA0013.jpg',
        itmname: 'Shoes',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240327-WA0016.jpg',
        itmname: 'Shoes',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240327-WA0019.jpg',
        itmname: 'Shoes',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240327-WA0020.jpg',
        itmname: 'Shoes',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240327-WA0014.jpg',
        itmname: 'Shoes',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0046.jpg',
        itmname: 'Shoes',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0033.jpg',
        itmname: 'Shoes',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0032.jpg',
        itmname: 'Shoes',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
    ]
    this.items1 = [
      {
        itmimg: '../../assets/img/IMG-20240326-WA0027.jpg',
        itmname: 'Shoes',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0030.jpg',
        itmname: 'Shoes',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0035.jpg',
        itmname: 'Hoodies',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0042.jpg',
        itmname: 'Clothing',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0052.jpg',
        itmname: 'Hoodies',
        itmprice: 200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0039.jpg',
        itmname: 'Clothing',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0035.jpg',
        itmname: 'Hoodies',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },

    ]
    this.sale1 = [
      {
        itmimg: '../../assets/img/IMG-20240326-WA0045.jpg',
        itmname: 'Hoodies',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0040.jpg',
        itmname: 'Hoodies',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0038.jpg',
        itmname: 'Hoodies',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0037.jpg',
        itmname: 'Hoodies',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0036.jpg',
        itmname: 'Hoodies',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0044.jpg',
        itmname: 'Hoodies',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
    ]
    this.just1 = [
      {
        itmimg: '../../assets/img/IMG-20240326-WA0052.jpg',
        itmname: 'Clothing',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0051.jpg',
        itmname: 'Hoodies',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0050.jpg',
        itmname: 'Shoes',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0042.jpg',
        itmname: 'Hoodies',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0035.jpg',
        itmname: 'Clothing',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0039.jpg',
        itmname: 'Hoodies',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
    ]

    //flash-sale

    this.bner = [
      {
        text: 'All',
      },
      {
        text: '10%',
      },
      {
        text: '20%',
      },
      {
        text: '25%',
      },
      {
        text: '30%',
      },
      {
        text: '35%',
      },
      {
        text: '40%',
      },
      {
        text: '45%',
      },
    ]
    this.dis = [
      {
        itmimg: '../../assets/img/IMG-20240326-WA0037.jpg',
        itmname: 'dolor sit',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0038.jpg',
        itmname: 'Lorem sit',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0036.jpg',
        itmname: 'Lorem dolor sit',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0040.jpg',
        itmname: 'Lorem ipsum',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0044.jpg',
        itmname: 'dolor sit',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
      {
        itmimg: '../../assets/img/IMG-20240326-WA0045.jpg',
        itmname: 'Lorem sit',
        itmprice: 2200,
        quantity: 1,
        total: 0,
        price: 0,
        contr: 0,
      },
    ]
    this.top2 = [
      {
        img: "../../assets/img/download (2).png",
        text: 'Dresses'
      },
      {
        img: "../../assets/img/download (4).png",
        text: 'Pants'
      },
      {
        img: "../../assets/img/download (5).png",
        text: 'Skirts'
      },
      {
        img: "../../assets/img/download (6).png",
        text: 'Shorts'
      },
      {
        img: "../../assets/img/download (7).png",
        text: 'Jackets'
      },
      {
        img: "../../assets/img/download (2).png",
        text: 'Hoodies'
      },
      {
        img: "../../assets/img/download (4).png",
        text: 'Shirts'
      },
      {
        img: "../../assets/img/download (5).png",
        text: 'Polo'
      },
      {
        img: "../../assets/img/download (6).png",
        text: 'T-shirts'
      },
      {
        img: "../../assets/img/download (7).png",
        text: 'Tunic'
      }
    ]
    this.size = [
      {
        text: 'XS'
      },
      {
        text: 'S'
      },
      {
        text: 'M'
      },
      {
        text: 'L'
      },
      {
        text: 'XL'
      },
      {
        text: '2XL'
      }
    ]
    this.col = [
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
    this.price = [
      {
        pri: '150',
        pri1: '10'
      }
    ]

  }

}
