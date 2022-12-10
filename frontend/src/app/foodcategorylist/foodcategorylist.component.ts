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
  data: any;

  constructor(private foodservice:AddfoodserviceService,private router:Router) { }

  ngOnInit(): void {
    this.foodservice.getFoodCtegory().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })

  }

  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['adminfoodcategoryupdate']);

  }

  deleteBook(book:any)
  {
    this.foodservice.deletecategoryadmin(book._id)
      .subscribe((data) => {
        this.books = this.data.filter((p:any) => p !== book)
      })
  
     }

}
