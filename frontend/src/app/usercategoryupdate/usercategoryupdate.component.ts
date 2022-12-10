import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserhomeserviceService } from '../userhomeservice.service';
@Component({
  selector: 'app-usercategoryupdate',
  templateUrl: './usercategoryupdate.component.html',
  styleUrls: ['./usercategoryupdate.component.css']
})
export class UsercategoryupdateComponent implements OnInit {
  book={

    category:'',
    description:'',
    remark:''
  }
  constructor(private addfoodservice:UserhomeserviceService,private router:Router) { }

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
    this.router.navigate(['userhome/usercatlist']);
  }

}
