import { Component, OnInit } from '@angular/core';
import { AddfoodserviceService } from '../addfoodservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  books: any;
  book:any;
  image:String="assets/boy.jpg"

  constructor(private foodservice:AddfoodserviceService,private router :Router) { }

  ngOnInit(): void {
    this.foodservice.getFoodCtegory().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })


  }
 
  
    

}
