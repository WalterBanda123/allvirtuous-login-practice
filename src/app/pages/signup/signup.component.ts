import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/user';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UntypedFormBuilder } from '@angular/forms';
import { ParseSourceFile } from '@angular/compiler';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  enteredEmail: string;
  enteredPassword: string;
  enteredUserName: string;
  confirmedPassword?: string;

  constructor(
    private SignupService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {
    (this.enteredEmail = ''),
      (this.enteredPassword = ''),
      (this.enteredUserName = '');
  }
  errorMessage?: string;

  ngOnInit() {
    this.signUpHandler();
  }

  users?: User[];

  onSuccess() {
    this.toastr.success('You have successfully register.', 'Registration', {
      timeOut: 3000,
    });
  }

  signUpHandler(): void {
    if (
      this.enteredEmail === '' ||
      this.enteredUserName === '' ||
      this.enteredPassword === ''
    ) {
      this.errorMessage = 'please fill all the fields provided';
      return;
    }
    if (this.enteredEmail.length != 0 && this.enteredPassword.length != 0) {
      if (this.enteredPassword === this.confirmedPassword) {
        this.SignupService.signupUser(
          this.enteredEmail,
          this.enteredPassword,
          this.enteredUserName
        );
        this.onSuccess();
        this.router.navigate(['login']);
      } else {
        this.errorMessage = 'Passwords do not match. Retry.';
        return;
      }
    }
  }
}
