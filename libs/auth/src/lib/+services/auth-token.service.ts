import { Injectable } from '@angular/core';

@Injectable()
export class AuthTokenService {
  private TOKEN_KEY = 'auth-token';

  constructor() { }

  set(token: string) {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  get(): string {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  clear() {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }

}