import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {
    this.user = {
      id: -1,
      email: '',
      password: '',
    };
  }
  user: User;
  errorMessage?: string;

  onLogin(): void {
    const user = this.loginService.onLogin(this.user.email, this.user.password);

    if (this.user?.email.length && this.user?.password.length > 0) {
      this.router.navigate(['dashboard', user?.id]);
    }
    if (this.user.email.length <= 0 || this.user!.password.length <= 0 ) {
      this.errorMessage = "User doesn't exist";
      return;
    }
  }

  ngOnInit(): void {}
}
