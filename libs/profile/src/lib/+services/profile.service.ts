import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of as observableOf } from 'rxjs';
import { Profile } from '@myorg/data-models';
import { delay } from 'rxjs/operators';

const apiUrl = 'http://localhost:3000';

@Injectable()
export class ProfileService {
  private baseUrl = `${apiUrl}/profile`;

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.baseUrl).pipe(delay(1000));
  }

  postProfile(e: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.baseUrl, e).pipe(delay(1000));
  }
}
