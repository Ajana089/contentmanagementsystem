import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title:String="LOGIN"
  loginresponse: any;
  image:String="assets/boy.jpg"
  constructor(private loginservice:LoginService,private router:Router) { }
  userSingnup={
    email:'',
    password:''
  }

  ngOnInit(): void {
  }
  addUser()
  {
    this.loginservice.loginUser(this.userSingnup).subscribe((data)=>{
      this.loginresponse=JSON.parse(JSON.stringify(data))
      if(this.loginresponse.useradmin=="admin"){
        localStorage.setItem('token',this.loginresponse.token)
        this.router.navigate(['adminhome']);
      }
      
      
     if (this.loginresponse.users=="users")
      {
        localStorage.setItem('token',this.loginresponse.token)
        
        this.router.navigate(['userhome'])
      }
    
      

    });
   
   
  }

}
