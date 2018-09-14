import { Component, OnInit } from '@angular/core';
import { loginService } from '../login.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {

    logins: string[];

    constructor(service: loginService) {
        this.logins = service.getlogin();

    }

    email = "test@test.com";

    onClick() {


        //console.log("button clicked");
        console.log(this.email);
    }

    ngOnInit() {
    }

}
