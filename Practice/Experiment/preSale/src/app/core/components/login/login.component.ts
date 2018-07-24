import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { 
    console.log("Login Componente was created!");
  }

  ngOnInit() {
    console.log("Login Componente was created!");
  }

}
