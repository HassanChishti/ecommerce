import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-helo-card',
  templateUrl: './helo-card.page.html',
  styleUrls: ['./helo-card.page.scss'],
})
export class HeloCardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
