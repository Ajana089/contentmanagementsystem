import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddfoodserviceService {

  constructor(private http:HttpClient) { }

  newUser(food:any){

    return this.http.post("http://localhost:3000/admin/addfoodcategory",food)
   
    .subscribe(data=>{alert(data)})

  }

  getFoodCtegory()
  {
    return this.http.get("http://localhost:3000/admin/foodcategorys");
  }


  getcategoryupdateID(id:any){
   
      return this.http.get("http://localhost:3000/admin/foodcategory"+id);
    
  }
  editadmincategory(book:any){
    return this.http.put("http://localhost:3000/admin/categoryupdate",book)
    .subscribe(data =>{console.log(data)})
  }

  deletecategoryadmin(id:any)
  {
     return this.http.delete("http://localhost:3000/admin/categoryremove/"+id)
   }


   newFood(food:any){

    console.log(food)

    return this.http.post("http://localhost:3000/admin/addfood",food)
   
    .subscribe(data=>{alert(data)})


   }


   getadminFood()
   {
     return this.http.get("http://localhost:3000/admin/adminfoods");
   }

   getfoodupdateID(id:any){
   
    return this.http.get("http://localhost:3000/admin/adminfood"+id);
  
}

editadminfood(book:any){
  return this.http.put("http://localhost:3000/admin/adminfoodupdate",book)
  .subscribe(data =>{console.log(data)})
}


deletefoodadmin(id:any)
  {
     return this.http.delete("http://localhost:3000/admin/adminfoodremove/"+id)
   }

  //  displaycategory(bookid:any){

  //   return this.http.get("http://localhost:3000/admin/");
  


  //  }
  
}
