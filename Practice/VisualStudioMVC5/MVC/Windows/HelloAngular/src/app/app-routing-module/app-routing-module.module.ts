import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { LoginComponent } from '../core/components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot([
          // Path routing is being served by IIS, thus this shall follow the routconfiguration class.
          // Uncomment this if you want to run it wihtout IIS
        //{path:'Home/Contact', redirectTo:'login', pathMatch:'full'},
        { path:'Home/Contact', component:LoginComponent}
    ])
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModuleModule { }
