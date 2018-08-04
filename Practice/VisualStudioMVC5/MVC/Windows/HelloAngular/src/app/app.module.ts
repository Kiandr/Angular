import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModuleModule} from './app-routing-module/app-routing-module.module';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { APP_BASE_HREF } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModuleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CoreModule
  ],
    providers: [{ provide: APP_BASE_HREF, useValue: 'Home/Contact' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
