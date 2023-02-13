import { Component, OnInit, Input } from '@angular/core';
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
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
  ) {}

  @Input() user?: User;
  users:User[] =[]

  ngOnInit(): void{
    this.getUser();
  }


  getUsers():void{
    this.loginService.getUsers().subscribe(users => this.users = users);
    console.log(this.users)
  }

  getUser():void{
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.loginService.getUser(id).subscribe( user => this.user = user)
  }

}
