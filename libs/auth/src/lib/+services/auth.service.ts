import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay } from 'rxjs/operators';
import { User, Authenticate } from '@myorg/data-models';

const apiUrl = 'http://localhost:3000';

@Injectable()
export class AuthService {
  private loginUrl = `${apiUrl}/login`;
  private logoutUrl = `${apiUrl}/logout`;

  constructor(
    private http: HttpClient
  ) { }

  login(auth: Authenticate) {
    return this.http.get<User>(this.loginUrl).pipe(delay(1000));
  }

  logout() {
    return this.http.get<void>(this.logoutUrl).pipe(delay(1000));
  }

}
