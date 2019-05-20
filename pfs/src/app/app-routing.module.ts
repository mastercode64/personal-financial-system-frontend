import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { DashboardAuthGuard } from './_guards/dashboard-auth.guard';
import { ExpenseComponent } from './expense/expense.component';
import { SigninAuthGuard } from './_guards/signin-auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: SigninComponent,
    canActivate: [SigninAuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [DashboardAuthGuard]
  },
  {
    path: 'expenses',
    component: ExpenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
