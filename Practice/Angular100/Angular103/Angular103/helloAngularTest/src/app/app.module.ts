

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AlertService } from './alert.service';
import { AlertComponent } from './alert/alert.component';
import { LoginService } from './login.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent
 
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
),
   
    AppRoutingModule
 
  ],
  providers: [AlertService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
