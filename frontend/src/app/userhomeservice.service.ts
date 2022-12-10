import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserhomeserviceService {

  constructor(private http:HttpClient) { }

newUser(food:any){

  return this.http.post("http://localhost:3000/userad/addfoodcategory",food)
 
  .subscribe(data=>{alert(data)})

}

getFoodCtegory()
{
  return this.http.get("http://localhost:3000/userad/foodcategorys");
}


getcategoryupdateID(id:any){
 
    return this.http.get("http://localhost:3000/userad/foodcategory"+id);
  
}
editadmincategory(book:any){
  return this.http.put("http://localhost:3000/userad/categoryupdate",book)
  .subscribe(data =>{console.log(data)})
}

deletecategoryadmin(id:any)
{
   return this.http.delete("http://localhost:3000/userad/categoryremove/"+id)
 }


 newFood(food:any){

  console.log(food)

  return this.http.post("http://localhost:3000/userad/addfood",food)
 
  .subscribe(data=>{alert(data)})


 }


 getadminFood()
 {
   return this.http.get("http://localhost:3000/userad/adminfoods");
 }

 getfoodupdateID(id:any){
 
  return this.http.get("http://localhost:3000/userad/adminfood"+id);

}

editadminfood(book:any){
return this.http.put("http://localhost:3000/userad/adminfoodupdate",book)
.subscribe(data =>{console.log(data)})
}


deletefoodadmin(id:any)
{
   return this.http.delete("http://localhost:3000/userad/adminfoodremove/"+id)
 }



}

