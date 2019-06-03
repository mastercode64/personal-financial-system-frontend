import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './views/signin/signin.component';
import { SigninAuthGuard } from './_guards/signin-auth.guard';
import { SignupComponent } from './views/signup/signup.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardAuthGuard } from './_guards/dashboard-auth.guard';
import { HomeComponent } from './views/home/home.component';
import { ExpenseComponent } from './views/expense/expense.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [SigninAuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
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
