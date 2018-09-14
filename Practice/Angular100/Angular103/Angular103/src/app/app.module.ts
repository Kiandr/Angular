import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';



@NgModule({
    declarations: [
        AppComponent,

        // LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
      

    ],
    // providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule { }
