import { Component } from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username!: string;
  password!: string;
  email!: string;
  constructor(private userService: UsersService) {
  }

  ngOnInit() {

  }
  register() {
    const user = {username: this.username, email: this.email, password: this.password};
    this.userService.register(user).subscribe(response => {
      console.log(response);
      window.location.href = "/login";
    });
  }
}
