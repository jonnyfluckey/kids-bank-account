import { Component, OnInit } from '@angular/core';
import { HttpClient as Http } from '@angular/common/http';
import { IAccount } from './account';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  errorMessage: string  = '';
  accounts: IAccount[] = []

  constructor (private accountService: AccountService)  {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(
      accounts => {
        this.accounts = accounts
      },
      error => this.errorMessage = <any>error
    )
  }


}