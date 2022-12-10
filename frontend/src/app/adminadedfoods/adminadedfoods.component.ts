import { Component, OnInit } from '@angular/core';
import { AddfoodserviceService } from '../addfoodservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminadedfoods',
  templateUrl: './adminadedfoods.component.html',
  styleUrls: ['./adminadedfoods.component.css']
})
export class AdminadedfoodsComponent implements OnInit {
  cats: any;

  constructor(private addfoodservice:AddfoodserviceService,private router: Router){  } 
  productItem= {
     
     food:'',
     category:'',
     description:'',
     rate:'',
     rating:'',
     imageurl:''
    }

  
  ngOnInit(): void {

    
    this.addfoodservice.getFoodCtegory().subscribe((data: any)=>{
      this.cats=JSON.parse(JSON.stringify(data));

    })

  
   
}

  AddProduct()
  {    
    //  console.log(this.productItem);
    this.addfoodservice.newFood(this.productItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['adminhome/adminaddedfoodlist']);
  }

}
