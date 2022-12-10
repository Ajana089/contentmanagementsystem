import { Component, OnInit } from '@angular/core';
import { AddfoodserviceService } from '../addfoodservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminfoodlists',
  templateUrl: './adminfoodlists.component.html',
  styleUrls: ['./adminfoodlists.component.css']
})
export class AdminfoodlistsComponent implements OnInit {

  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false

  products=[ {
     
    food:'',
    category:'',
    description:'',
    rate:'',
    rating:'',
    imageurl:''
   }]

   toggleImage(): void{
    this.showImage = !this.showImage;
  }

  constructor(private foodservice:AddfoodserviceService,private router:Router) { }

  ngOnInit(): void {

    this.foodservice.getadminFood().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })

  }


  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['adminfoodupdate']);

  }
  deleteProduct(product:any)
  {
    this.foodservice.deletefoodadmin(product._id)
      .subscribe((data) => {
        this.products = this.products.filter(p => p !== product);
      })
  

 }

}
