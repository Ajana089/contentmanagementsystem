import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateusers',
  templateUrl: './updateusers.component.html',
  styleUrls: ['./updateusers.component.css']
})
export class UpdateusersComponent implements OnInit {
  book: any;

  constructor(private loginservice:LoginService,private router:Router) { }

  userSingnup={
    name:'',
    email:'',
    password:'',
    number:'',
    gender:'',
    isEnrolled:'false',
    users:"users"

  }
 

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    console.log(bookId);
    this.loginservice.getUserId(bookId).subscribe((data:any)=>{
    this.book=JSON.parse(JSON.stringify(data));
  })
  }

  editBook()
  {    
    this.loginservice.editBook(this.book);   
    alert("Success");
    this.router.navigate(['adminhome/Regusers']);
  }


}
