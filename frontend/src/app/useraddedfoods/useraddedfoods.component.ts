import { Component, OnInit } from '@angular/core';
import { UserhomeserviceService } from '../userhomeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useraddedfoods',
  templateUrl: './useraddedfoods.component.html',
  styleUrls: ['./useraddedfoods.component.css']
})
export class UseraddedfoodsComponent implements OnInit {
  title:String="Food Type"
  productItem= {
     
    food:'',
    category:'',
    description:'',
    rate:'',
    rating:'',
    imageurl:''
   }
  cats: any;
  constructor(private foodservice:UserhomeserviceService,private router:Router) { }

  ngOnInit(): void {
    this.foodservice.getFoodCtegory().subscribe((data: any)=>{
      this.cats=JSON.parse(JSON.stringify(data));

    })
  }
  AddProduct()
  {    
    //  console.log(this.productItem);
    this.foodservice.newFood(this.productItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['userhome/useraddedfoodlist']);
  }


 


}
