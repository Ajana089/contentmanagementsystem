import { Component, OnInit } from '@angular/core';
import { AddfoodserviceService } from '../addfoodservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodcategorylist',
  templateUrl: './foodcategorylist.component.html',
  styleUrls: ['./foodcategorylist.component.css']
})
export class FoodcategorylistComponent implements OnInit {
  books: any;

  constructor(private foodservice:AddfoodserviceService,private router:Router) { }

  ngOnInit(): void {
    this.foodservice.getFoodCtegory().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })

  }

}
