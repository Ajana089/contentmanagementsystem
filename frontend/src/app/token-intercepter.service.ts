import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req:any, nxt:any) 
   {

    let authservice=this.injector.get(LoginService)
    let tokenizedReq=req.clone(
      {
      setHeaders:{
        Authorisation:`Bearer ${authservice.getToken()}`
      }
    }
    )
    return nxt.handle(tokenizedReq)

   
  }
  
  
}
