import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-state1',
  templateUrl: './state1.page.html',
  styleUrls: ['./state1.page.scss'],
})
export class State1Page implements OnInit {
 

  // Initialize data as an empty array
  public filedata: any[] = [];
  // public Hasaan1: any[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    // Assign data from the service to the local data property
    this.filedata = this.dataService.announ;
    // this.Hasaan1 = this.dataService.Hassan;
  }

  go(item: any) {
    this.router.navigate(['./state2'], {
      queryParams: { name: item.name, name1: item.name1 }
    });
  }
}




// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { DataService } from '../data.service';
// @Component({
//   selector: 'app-state1',
//   templateUrl: './state1.page.html',
//   styleUrls: ['./state1.page.scss'],
// })
// export class State1Page implements OnInit {
// public Hassan:any=[
//   {
//   name:'Aqeel', 
//   name1:'Hassan'
//   },
//   {
//     name:'1', 
//     name1:'H'
//     },
//     {
//       name:'2', 
//       name1:'J'
//       },
//       {
//         name:'3', 
//         name1:'K'
//         },
// ]
//   constructor(public ro:Router, private route: ActivatedRoute) { 
    
//   }

//   ngOnInit() {
//   }
//   // go(item:any){
//   //   // this.ro.navigate(['state2'],{state:{h:item}})
//   // this.ro.navigate(['./state2'],{
//   //   queryParams:{name:item.name,name1:item.name1}
//   // })
//   // }
//   go(item:any){
//     this.ro.navigate(['./state2'],{
//       queryParams:{name:item.name , name1:item.name1}
//     })
//   }
// }
