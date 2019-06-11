import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseCreationComponent } from './expense-creation/expense-creation.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

@NgModule({
    imports: [
        ExpenseRoutingModule,
        
        RouterModule,
        CommonModule
    ],
    declarations: [
        ExpenseListComponent,
        ExpenseCreationComponent
    ]
  })
export class ExpenseModule { }