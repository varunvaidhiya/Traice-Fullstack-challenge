import { Injectable ,Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptopService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req:any, next:any){
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders:{
        Autherization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
