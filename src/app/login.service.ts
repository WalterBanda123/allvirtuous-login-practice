import { Injectable, OnInit } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { USERS } from './users';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements OnInit {
  users = USERS;
  userLogin: any;

  getUsers(): Observable<User[]> {
    const userslist = of(this.users);
    console.log('users list', userslist);
    return userslist;
  }

  loginUser(email: string, password: string) {
    this.userLogin = this.users?.find(
      (u) => u.password === password && u.email === email
    );
    
  }
  signUpUser(email: string, password: string) {
    const newUser: User = {
      id: Math.random().toFixed(3),
      email: email,
      password: password,
    };

    this.users.push(newUser);
    console.log(newUser, this.users);
  }

  getUser(id: string): Observable<User> {
    const user = this.users.find((user) => user.id === id)!;
    return of(user);
  }

  constructor() {}

  ngOnInit(): void {}
}
