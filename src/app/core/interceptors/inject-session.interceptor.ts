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
  constructor(private cookieService: CookieService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      const token = this.cookieService.get('token')
      if(request.url.includes('auth')){
        return next.handle(request)
      }else{
        const newResponse = request.clone({
          url: `${request.url}?auth=${token}`
        })
        return next.handle(newResponse)
        }

    } catch (e) {
      console.log('🔴🔴🔴 Ojito error', e)
      return next.handle(request);
    }
  }
}