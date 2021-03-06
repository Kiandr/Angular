/// <reference path="services/header-interceptor.service.ts" />
import {BrowserModule} from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { AuthService } from "./services/auth.service";
import { HttpClientService } from "./services/http-client.service";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientXsrfModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { HeaderInterceptorService} from "./services/header-interceptor.service";
//import Headerinterceptorservice = require("./services/header-interceptor.service");
//import HeaderInterceptorService = HeaderInterceptorService1;
//import Headerinterceptorservice = require("./services/header-interceptor.service");
//import HeaderInterceptorService1 = Headerinterceptorservice.HeaderInterceptorService;


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientXsrfModule.withOptions({
            cookieName: "My-Cookie",
            headerName: "myheader"
        }),
        ReactiveFormsModule,
    ],
    providers: [
        HttpModule,
        HttpClient,
        AuthService,
        HttpClientService,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HeaderInterceptorService,
            multi: true,
        }
    ],
    declarations: [LoginComponent],
    exports: [],
    bootstrap: []
})
export class CoreModule {
}


/*
Theory: 
An NgModule is defined as a class decorated with @NgModule. The @NgModule decorator is a function that takes a single metadata object, whose properties describe the module. The most important properties are as follows.
declarations—The components, directives, and pipes that belong to this NgModule.
exports—The subset of declarations that should be visible and usable in the component templates of other NgModules.
imports—Other modules whose exported classes are needed by component templates declared in this NgModule.
providers—Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app. (You can also specify providers at the component level, which is often preferred.)
bootstrap—The main application view, called the root component, which hosts all other app views. Only the root NgModule should set this bootstrap property.
Here's a simple root NgModule definition:


*/