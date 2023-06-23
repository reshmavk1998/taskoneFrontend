import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscussionComponent } from './discussion/discussion.component';

const routes: Routes = [

// login
{
  path:'' , component:LoginComponent
},
// signup
{
  path:'signup' , component:SignupComponent
},
// dashboard
{
  path:'dashboard' , component:DashboardComponent
},
// discussion 
{
  path:'discussion' , component:DiscussionComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
