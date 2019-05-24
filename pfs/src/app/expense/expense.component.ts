import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from './expense';


const apiUrl = 'http://localhost:8080/expenses';

@Component({
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  contentTitle: string = 'Despesas';

  expenseList: any[] = [];

  constructor(
    private http: HttpClient) { }

  ngOnInit() {


    this.http.get<any[]>(apiUrl).subscribe(res => {

      this.expenseList = res;
    }, err => console.log(err));

  }

}
