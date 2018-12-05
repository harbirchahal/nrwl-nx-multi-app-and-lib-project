import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User, Authenticate } from '@myorg/data-models';
import { AuthTokenService } from '../+services/auth-token.service';
import { AuthService } from '../+services/auth.service';

@Injectable()
export class AuthFacade {
  private authenticated: boolean;

  private loggedInUser = new BehaviorSubject<User>(null);
  loggedInUser$ = this.loggedInUser.asObservable();

  constructor(
    private service: AuthService,
    private authToken: AuthTokenService
  ) { }

  isAuthenticated() {
    return this.authenticated;
  }

  authenticate(auth: Authenticate) {
    return this.service.login(auth).pipe(
      tap((user: User) => {
        this.authToken.set(user.token);
        this.authenticated = true;
        this.loggedInUser.next(user);
      })
    );
  }

  endSession() {
    return this.service.logout().pipe(
      tap(() => {
        this.authToken.clear();
        this.authenticated = false;
        this.loggedInUser.next(null);
      })
    );
  }

}