import { Component, OnInit } from '@angular/core';
import { UserhomeserviceService } from '../userhomeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userfoodupdate',
  templateUrl: './userfoodupdate.component.html',
  styleUrls: ['./userfoodupdate.component.css']
})
export class UserfoodupdateComponent implements OnInit {
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
   

    let productId = localStorage.getItem("editProductId");
    this.foodservice.getfoodupdateID(productId).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
  })

  }

  editProduct()
  {    
    this.foodservice.editadminfood(this.productItem);   
    alert("Success");
    this.router.navigate(['userhome/useraddedfoodlist']);
  }

}
