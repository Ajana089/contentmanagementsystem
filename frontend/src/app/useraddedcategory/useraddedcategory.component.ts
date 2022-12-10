import { Component, OnInit } from '@angular/core';
import { UserhomeserviceService } from '../userhomeservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-useraddedcategory',
  templateUrl: './useraddedcategory.component.html',
  styleUrls: ['./useraddedcategory.component.css']
})
export class UseraddedcategoryComponent implements OnInit {

  book={

    category:'',
    description:'',
    remark:''
  }

  constructor(private userhomeservice:UserhomeserviceService,private router:Router) { }

  ngOnInit(): void {
  }


  addUser()
  {
    this.userhomeservice.newUser(this.book);
    alert("Added")
    this.router.navigate(['userhome/usercatlist']);
  }

}
