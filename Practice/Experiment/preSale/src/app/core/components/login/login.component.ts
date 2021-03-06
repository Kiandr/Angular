import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { 
    console.log("Login Constructor was created!");
  }

  ngOnInit() {
    console.log("Login ngOnIti was created!");
    //this.authService.AppLogin();
  }
  onClickMe() {
    this.authService.AppLogin();
    console.log('You are my hero!');
  }

}
