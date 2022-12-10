import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddfoodserviceService } from '../addfoodservice.service';

@Component({
  selector: 'app-useradminhome',
  templateUrl: './useradminhome.component.html',
  styleUrls: ['./useradminhome.component.css']
})
export class UseradminhomeComponent implements OnInit {
  book: any;

  constructor(private router:Router,private homeservice:AddfoodserviceService) { }

  ngOnInit(): void {
    // let bookId = localStorage.getItem("editBookId");
    // console.log(bookId)
  //  this.homeservice.displaycategory(bookId)
    // .subscribe((data:any)=>{
    //   this.book=JSON.parse(JSON.stringify(data));
    // })
  }

}
