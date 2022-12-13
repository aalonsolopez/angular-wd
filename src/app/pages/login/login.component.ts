import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(public userService: UsersService) {
  }

  ngOnInit() {
  }

  login() {
    const user = {username: this.username, password: this.password};
    this.userService.login(user).subscribe(data => {
      console.log(data);
    })
  }
}

