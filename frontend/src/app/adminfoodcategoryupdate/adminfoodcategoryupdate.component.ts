import { Component, OnInit } from '@angular/core';
import { AddfoodserviceService } from '../addfoodservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminfoodcategoryupdate',
  templateUrl: './adminfoodcategoryupdate.component.html',
  styleUrls: ['./adminfoodcategoryupdate.component.css']
})
export class AdminfoodcategoryupdateComponent implements OnInit {

  constructor(private addfoodservice:AddfoodserviceService,private router:Router) { }

  book={

    category:'',
    description:'',
    remark:''
  }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    //console.log(bookId);
    this.addfoodservice.getcategoryupdateID(bookId).subscribe((data:any)=>{
    this.book=JSON.parse(JSON.stringify(data));
  })

  }

  editBook()
  {    
    this.addfoodservice.editadmincategory(this.book);   
    alert("Success");
    this.router.navigate(['adminhome/categorylist']);
  }

}
