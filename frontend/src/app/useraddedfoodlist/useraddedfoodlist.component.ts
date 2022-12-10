import { Component, OnInit } from '@angular/core';
import { UserhomeserviceService } from '../userhomeservice.service';
import { Router } from '@angular/router';
import { UserhomeComponent } from '../userhome/userhome.component';
@Component({
  selector: 'app-useraddedfoodlist',
  templateUrl: './useraddedfoodlist.component.html',
  styleUrls: ['./useraddedfoodlist.component.css']
})
export class UseraddedfoodlistComponent implements OnInit {

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


  constructor(private foodservice:UserhomeserviceService,private router:Router) { }

  ngOnInit(): void {

    this.foodservice.getadminFood().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })
  }

  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['userfoodupdate']);

  }
  deleteProduct(product:any)
  {
    this.foodservice.deletefoodadmin(product._id)
      .subscribe((data) => {
        this.products = this.products.filter(p => p !== product);
      })
  

 }


}
