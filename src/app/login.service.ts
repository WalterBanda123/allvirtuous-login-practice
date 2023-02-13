import { Injectable, OnInit } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { USERS } from './users';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  getUsers(): Observable<User[]> {
    const users = of(USERS);
    return users;
  }

  signupUser(email: string, password: string):void {
    const newUser: User = {
      id: Math.random(),
      email: email,
      password: password,
    };

    USERS.push(newUser);
  }

  onLogin(email: string, password: string) {
    const user = USERS.find(
      (u) => u.email === email && u.password === password
    );
    return user;
  }
  getUser(id: number): Observable<User> {
    const user = USERS.find((u) => u.id === id)!;
    return of(user);
  }

  constructor() {}
}
