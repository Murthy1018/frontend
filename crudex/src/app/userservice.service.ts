import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private apiUrl = 'http://localhost:18273/api/users';
  currentUser: any;

  constructor(private http: HttpClient, private router: Router) {}

  getCurrentUser(): Observable<any> {
    const apiUrl = `${this.apiUrl}/current`;
    return this.http.get(apiUrl).pipe(
      tap((user: any) => {
        this.currentUser = user;
      }),
      catchError((error) => {
        this.currentUser = null;
        return of(null);
      })
    );
  }

  updateUser(updatedUser: any): Observable<any> {
    const apiUrl = `${this.apiUrl}/${this.currentUser.id}`;
    return this.http.put(apiUrl, updatedUser).pipe(
      tap(() => {
        this.currentUser = { ...this.currentUser, ...updatedUser };
      }),
      catchError((error) => {
        return of(null);
      })
    );
  }

  logout(): void {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }
}
