import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { AuthService } from '@modules/auth/services/auth.service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {
  private readonly URL = environment.api
  constructor(private cookieService: CookieService, private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      const token = this.cookieService.get('token')
      //const token = this.authService.getToken();
      //if(!token){
        //console.log('Token aun no disponible')
        //return EMPTY;
      //}
      let newRequest = request
      newRequest = request.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}`
          }
        }
      )
      console.log('holi', token)
      console.log('holi2 ', newRequest)
      return next.handle(newRequest);

    } catch (e) {
      console.log('🔴🔴🔴 Ojito error', e)
      return next.handle(request);
    }
  }
}