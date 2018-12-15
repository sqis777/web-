import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockPageComponent } from "./pages/clock-page/clock-page.component";
import { GooutPageComponent } from "./pages/goout-page/goout-page.component";
import { LeavePageComponent } from "./pages/leave-page/leave-page.component";
import { LoginComponent } from "./pages/login/login.component";
import { AnnualPageComponent } from './pages/annual-page/annual-page.component';
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: 'clock',
    canActivate: [AuthGuard],
    component: ClockPageComponent
  },
  {
    path: 'goout',
    component: GooutPageComponent
  },
  {
    path: 'leave',
    component: LeavePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'annual',
    component: AnnualPageComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
