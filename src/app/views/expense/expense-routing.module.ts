import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseCreationComponent } from './expense-creation/expense-creation.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ExpenseListComponent
            },
            {
                path: 'new',
                component: ExpenseCreationComponent
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpenseRoutingModule { }