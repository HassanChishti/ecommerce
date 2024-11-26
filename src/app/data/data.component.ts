

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  inputValue: string = '';
  // dataList: string[] = [];
  pro: string = ''; // Property to store entered data
  dataList: string[] = []; // Array to store entered data
  

  constructor(public router: Router) { }

  ngOnInit() {}

  addData() {
    if (this.pro.trim()) {
      this.dataList.push(this.pro); // Push the value of pro into the dataList array
      this.pro = ''; // Clear the input field
    }
  }

  go() {
    this.router.navigate(['home']);
  }
}

