import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private LoginService: LoginService,
    private location: Location
  ) {}

  user: User | undefined;
  userId: string = '';
  users?: User[];

  getUsers(): void {
   // this.user = this.LoginService.userLogin;
    this.LoginService.getUsers().subscribe((users) => this.users === users);
    console.log(this.users)
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.user = this.LoginService.users.find(
      (user) => user.id === this.userId
    );

    this.getUsers()
  }

  /*getUser(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.LoginService.getUser(id).subscribe((user) => (this.user = user));
  } */
}
