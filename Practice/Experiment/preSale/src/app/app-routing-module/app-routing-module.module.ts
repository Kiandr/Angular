import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { LoginComponent } from '../core/components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent}
    ])
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModuleModule { }
