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
    path: '',
    redirectTo: '/clock',
    pathMatch: 'full'
  },
  {
    path: 'clock',
    canActivate: [AuthGuard],
    component: ClockPageComponent
  },
  {
    path: 'goout',
    canActivate: [AuthGuard],
    component: GooutPageComponent
  },
  {
    path: 'leave',
    canActivate: [AuthGuard],
    component: LeavePageComponent
  },
  {
    path: 'annual',
    canActivate: [AuthGuard],
    component: AnnualPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
