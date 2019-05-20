import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const apiUrl = 'http://localhost:8080/expenses';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenseList = [];
  constructor(
    private http: HttpClient) { }

  ngOnInit() {

    
    this.http.get(apiUrl).subscribe(res => {
          console.log(res);
        }, err => console.log(err));

  }

}
