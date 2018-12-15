import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClockPageComponent } from './pages/clock-page/clock-page.component';
import { GooutPageComponent } from './pages/goout-page/goout-page.component';
import { LeavePageComponent } from './pages/leave-page/leave-page.component';
import { LoginComponent } from './pages/login/login.component';
import { GooutPageCardComponent } from './components/goout-page-card/goout-page-card.component';
import { NewOutComponent } from './components/new-out/new-out.component';
import { NewLeaveComponent } from './components/new-leave/new-leave.component';
import { FooterComponent } from './components/footer/footer.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClockPageComponent,
    GooutPageComponent,
    LeavePageComponent,
    LoginComponent,
    GooutPageCardComponent,
    NewOutComponent,
    NewLeaveComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
