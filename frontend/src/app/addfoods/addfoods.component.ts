import { Component, OnInit } from '@angular/core';
import { AddfoodserviceService } from '../addfoodservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfoods',
  templateUrl: './addfoods.component.html',
  styleUrls: ['./addfoods.component.css']
})
export class AddfoodsComponent implements OnInit {
  title:String="Food Type"
  book={

    category:'',
    description:'',
    remark:''
  }


  constructor(private foodservice:AddfoodserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  addUser()
  {
    this.foodservice.newUser(this.book);
    alert("Added")
    this.router.navigate(['adminhome/food']);
  }


}
