import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  error:any;

  constructor(private http:HttpClient,private router:Router) { }

  newUser(user:any){

  console.log(user);
   return this.http.post("http://localhost:3000/user/signup",user)
    .subscribe((res) => {
      this.router.navigate(['login']);
  }, (err) => {
      this.error = err.message;
    //  alert(err.message);
      
  });
  }


  


    loginUser(user:any){

       console.log(user)
    
      return this.http.post("http://localhost:3000/user/login",user)
    
  //   .subscribe((res) => {
  //     this.router.navigate(['userhome']);
  //                     }, 
  // (err) => {
  //     this.error = err.message;
  //     alert("plese try to login with registered email and password");
  
  // })
  



}

getUsers()
{
  return this.http.get("http://localhost:3000/admin/addusers");
}
approval(data:any)

{
  console.log(data)
  return this.http.put("http://localhost:3000/admin/approvestudent",data);

}

deleteBook(id:any)
{

  return this.http.delete("http://localhost:3000/admin/userremove/"+id)

}


getUserId(id:any){
  console.log(id)
  return this.http.get("http://localhost:3000/admin/user"+id);
}


// getBookId(id:any){
//   return this.http.get("https://backendlibrary12345.herokuapp.com/books/"+id);
// }

editBook(book:any)
{
  console.log('client update')
  return this.http.put("http://localhost:3000/admin/approvestudent",book)
  .subscribe(data =>{console.log(data)})
}

  }
  
  


