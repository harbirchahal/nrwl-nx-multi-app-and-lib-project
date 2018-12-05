import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthFacade } from '../+state';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  facade: AuthFacade;

  constructor(
    private injector: Injector
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.facade = this.injector.get(AuthFacade);
    return next.handle(req);
  }

}