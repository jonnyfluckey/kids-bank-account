import { Component } from '@angular/core';
import { IAccount } from './account';
import { IAccountDetails } from './accountdetails';

import kidAccount from './kidaccounts.json';
import kidAccountDetail from './kidaccountdetail.json';

// review https://stackblitz.com/edit/json-import-example to help with JSON import

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  accounts: IAccount[] = kidAccount;
  accountDetails: IAccountDetails[] = kidAccountDetail.accountName;
}
