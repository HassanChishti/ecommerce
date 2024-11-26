// State2Page
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-state2',
  templateUrl: './state2.page.html',
  styleUrls: ['./state2.page.scss'],
})
export class State2Page implements OnInit {
  public receiver: any;

  constructor(public ro: ActivatedRoute, public global: GlobalService) {}

  ngOnInit() {
    
  }
}
