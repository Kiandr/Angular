import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { LoginComponent } from '../core/components/login/login.component';
import {BrowserModule} from '@angular/platform-browser';
@NgModule({
  imports: [
      CommonModule, 
      BrowserModule,
        RouterModule.forRoot([
            //{ path: '/', redirectTo:'/login', pathMatch:'full'},
            { path:'Home/Contact', component:LoginComponent}
            //{
            //    path: ':folder/:id',
            //    component: LoginComponent,
            //    children: [
            //        {
            //            path: "contacts/:name",
            //            redirectTo:"/contact/:name"
            //        }]
            //}
        ]),
      RouterModule.forChild([
          ])
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModuleModule { }
