import { Component, OnInit } from '@angular/core';
import { AddfoodserviceService } from '../addfoodservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminfoodupdate',
  templateUrl: './adminfoodupdate.component.html',
  styleUrls: ['./adminfoodupdate.component.css']
})
export class AdminfoodupdateComponent implements OnInit {
  productItem= {
     
    food:'',
    category:'',
    description:'',
    rate:'',
    rating:'',
    imageurl:''
   }
  cats: any;

  constructor(private foodservice:AddfoodserviceService,private router:Router) { }

  ngOnInit(): void {


    this.foodservice.getFoodCtegory().subscribe((data: any)=>{
      this.cats=JSON.parse(JSON.stringify(data));

    })
   

    let productId = localStorage.getItem("editProductId");
    this.foodservice.getfoodupdateID(productId).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
  })
  }
  editProduct()
  {    
    this.foodservice.editadminfood(this.productItem);   
    alert("Success");
    this.router.navigate(['adminhome/adminaddedfoodlist']);
  }


}
