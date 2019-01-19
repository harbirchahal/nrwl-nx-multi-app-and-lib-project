import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authToken: AuthTokenService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authToken.has()) {
      req = req.clone({
        setHeaders: {
          Authorization: this.authToken.get()
        }
      });
    }
    return next.handle(req);
  }

}