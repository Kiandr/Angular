import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { loginService } from './login.service';
import { loginComponent } from './login/login.component';

@NgModule({
    imports: [BrowserModule, HttpClientModule,],
    declarations: [loginComponent],
    bootstrap: [loginComponent],
    providers: [loginService]
})
export class AppModule { }
