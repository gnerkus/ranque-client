import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JwtStorageService {
  getItem(): Observable<string | null> {
    const data = sessionStorage.getItem('token');
    if (data) {
      return of(data);
    }
    return of(null);
  }

  setItem(data: string): Observable<string> {
    sessionStorage.setItem('token', data);
    return of(data);
  }

  removeItem(): Observable<boolean> {
    sessionStorage.removeItem('token');
    return of(true);
  }
}
