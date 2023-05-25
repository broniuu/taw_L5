import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {Token} from "../models/token";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:3001/api';

  constructor(private http: HttpClient) {
  }
  authenticate(credentials: any) {
    return this.http.post(this.url + '/user/auth', {
      login: credentials.login,
      password: credentials.password
    }).pipe(
      map((result: Token | any) => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      })
    );
  }

  createOrUpdate(credentails: any) {
    console.log(credentails);
    return this.http.post(this.url + '/user/create', credentails);
  }

  logout() {
    return this.http.delete(this.url + '/user/logout/' + this.currentUser.userId)
      .pipe(map(() => {
        localStorage.removeItem('token');
      }));
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (!token) {
      return false
    }
    return !(jwtHelper.isTokenExpired(token));
  }
  get currentUser() {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    return new JwtHelperService().decodeToken(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
