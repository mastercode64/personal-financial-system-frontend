import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const apiUrl = 'http://localhost:8080/expenses';

@Component({
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  contentTitle: string = 'Despesas';

  expenseList = [];
  constructor(
    private http: HttpClient) { }

  ngOnInit() {

    
    this.http.get(apiUrl).subscribe(res => {
          console.log(res);
        }, err => console.log(err));

  }

}
