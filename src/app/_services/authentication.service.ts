import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MFAST_API } from '../app.api';
import { Usuario } from '@/_models';

@Injectable( { providedIn: 'root' } )

export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${MFAST_API}/authenticate`, { email: email, password: password })
    .pipe(map(usuario => {
    // login successful if there's a jwt token in the response
    if (usuario && usuario.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(usuario));
    }
      return usuario;
    }));
    }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}