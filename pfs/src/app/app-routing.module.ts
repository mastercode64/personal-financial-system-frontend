import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { DashboardAuthGuard } from './_guards/dashboard-auth.guard';
import { ExpenseComponent } from './expense/expense.component';
import { SigninAuthGuard } from './_guards/signin-auth.guard';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'login',
    component: SigninComponent,
    canActivate: [SigninAuthGuard]
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    canActivate: [DashboardAuthGuard],    
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'expenses',
        component: ExpenseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
