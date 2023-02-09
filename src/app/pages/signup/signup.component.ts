import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private SignupService: LoginService) {}

  enteredEmail = '';
  enteredPassword = '';
  theUser: User = { id: '', email: '', password: '' };

  users?: User[];

  ngOnInit(): void {
    this.SignupService.getUsers().subscribe((users) => this.users === users);
    console.log(this.users)
    this.onSave();
  }

  onSave() {
    this.SignupService.signUpUser(
      this.enteredEmail.slice(),
      this.enteredPassword.slice()
    );

    console.log(this.enteredEmail, this.enteredPassword )
  }



}
