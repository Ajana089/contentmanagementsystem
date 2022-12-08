import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data:any;
  message:any;
  books: any;

  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {

    this.loginservice.getUsers().subscribe((data)=>{
      this.data=JSON.parse(JSON.stringify(data));
  })
   
  }
  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update']);

  }

  deleteBook(book:any)
  {
    this.loginservice.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.data.filter((p: any) => p !== book);
      })
      this.router.navigate(['adminhome/Regusers']);
    }

  }
