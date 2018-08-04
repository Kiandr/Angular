import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import * as $ from "jquery";
@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    private antiForgeryToken :any;
    constructor(private router: Router, private authService: AuthService) {
        this.antiForgeryToken= $("input[name=__RequestVerificationToken]").val();
        console.log("Login Constructor was created!");
    }

    ngOnInit() {
        console.log("Login ngOnIti was created!");
    }

    httpGetTest() {
        this.authService.httpGetTest();
        console.log("You are my hero!");
    }

    httpPostTest() {
        this.authService.httpPostTest();
        console.log("You are my hero!");
    }

    httpAntiForgeryTest() {
        //let antiForgeryToken: any = $("input[name=__RequestVerificationToken]").val();
        console.log("AntoForgeryToken=" + this.antiForgeryToken);
    }
}