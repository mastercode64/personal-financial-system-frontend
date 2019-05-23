import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardAuthGuard } from './_guards/dashboard-auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { AuthenticationService } from './_services/authentication.service';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { ExpenseComponent } from './expense/expense.component';
import { SigninAuthGuard } from './_guards/signin-auth.guard';
import { TokenInterceptor } from './_helpers/token.interceptor';
import { DashboardModule } from './dashboard-layout/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [
    DashboardAuthGuard,
    SigninAuthGuard,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
