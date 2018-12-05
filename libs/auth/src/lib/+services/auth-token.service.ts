import { Injectable } from '@angular/core';

@Injectable()
export class AuthTokenService {
  private TOKEN_KEY = 'auth-token';

  constructor() { }

  set(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  get(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  clear() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

}