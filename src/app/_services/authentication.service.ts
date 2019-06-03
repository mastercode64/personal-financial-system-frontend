import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { Router } from '@angular/router';


const apiUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService) { }

  login(username: string, password: string) {

    const loginUrl = `${apiUrl}/login`;

    const body = {
      username: username,
      password: password
    };

    return this.http.post<any>(
      loginUrl,
      body,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: "response",
        withCredentials: false
      })
      .pipe(tap(res => {
        const authToken = res.headers.get('Authorization');
        this.tokenService.setToken(authToken);
        return res;
      }));
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigate(['/signin']);
  }
}
