import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthTokenService } from './auth-token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
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
    return next.handle(req).pipe(
      catchError(event => {
        // console.error('AuthInterceptor', event);
        if (event instanceof HttpErrorResponse) {
          if (event.status === 401) {
            this.authToken.clear();
            this.router.navigateByUrl('/login');
            return empty();
          }
        }
        throw event;
      })
    );
  }

}