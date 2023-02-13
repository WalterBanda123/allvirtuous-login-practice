import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/user';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private SignupService: LoginService, private router: Router) {}

  enteredEmail: string = '';
  enteredPassword: string = '';
  confirmedPassword: string = '';

  errorMessage?: string;

  ngOnInit() {
    this.signUpHandler();
  }

  users?: User[];

  signUpHandler(): void {
    
    if (this.enteredEmail.length > 0 && this.enteredPassword.length > 0) {
      if (this.enteredPassword === this.confirmedPassword) {
        this.SignupService.signupUser(this.enteredEmail, this.enteredPassword);
        this.router.navigate(['login']);
      } else {
        this.errorMessage = 'Passwords do not match. Retry.';
        return;
      }
    }
  }
}
