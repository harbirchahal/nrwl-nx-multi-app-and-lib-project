import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of as observableOf } from 'rxjs';
import { Entity } from '../+state/profile.reducer';
import { delay } from 'rxjs/operators';

const apiUrl = 'http://localhost:3000';

@Injectable()
export class ProfileService {
  private baseUrl = `${apiUrl}/profile`;

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Entity> {
    return this.http.get<Entity>(this.baseUrl);
  }

  postProfile(e: Entity): Observable<Entity> {
    return this.http.post<Entity>(this.baseUrl, e).pipe(delay(1000));
  }
}
