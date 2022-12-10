import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private loginservice:LoginService,private router:Router) { }
  title:string="Sign Up here!!"
  image:String="assets/boy.jpg"

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
  }
  
  addUser()
  {
    this.loginservice.newUser(this.userSingnup);
   
 }
 

}
