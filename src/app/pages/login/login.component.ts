import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/user';
import { USERS } from 'src/app/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user?: User = { id: '', email: '', password: '' };
  userLogin?: User | undefined;
  users: User[] = USERS;

  constructor(private LoginService: LoginService) {}

  ngOnInit(): void {
    this.LoginService.getUsers().subscribe(
      (userslist) => this.users === userslist
    );

    this.logInUser()
  }

  logInUser() {
    this.LoginService.loginUser(this.user!.email, this.user!.password);
  }

  /* loginUser() {
    this.userLogin = this.users?.find(
      (u) => u.password === this.user?.password && u.email === this.user?.email

    );

    console.log(" kkkkkk---",this.userLogin)

    console.log(this.user?.email, this.user?.password)


   // console.log(this.LoginService.getUser(this.userLogin!.id))
  } */
}
