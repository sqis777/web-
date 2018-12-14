import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockPageComponent } from "./pages/clock-page/clock-page.component";
import { GooutPageComponent } from "./pages/goout-page/goout-page.component";
import { LeavePageComponent } from "./pages/leave-page/leave-page.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  {path: 'clock', component: ClockPageComponent},
  {path: 'goout', component: GooutPageComponent},
  {path: 'leave', component: LeavePageComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
