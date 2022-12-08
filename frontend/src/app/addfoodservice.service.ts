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

  
}
