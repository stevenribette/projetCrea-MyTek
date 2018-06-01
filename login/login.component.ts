import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  email: string;
  password: string;
  isLoggingIn = true;

  constructor(private router: Router) {}

  ngOnInit() { }

  submit() {
    alert("You’re using: " + this.email);
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
