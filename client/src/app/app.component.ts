import { Component } from '@angular/core';
import { IAccount } from './account';
import { IAccountDetails } from './accountdetails';

import kidAccount from './kidaccounts.json';
import kidAccountDetails from './kidaccountdetail.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  accounts: IAccount[] = kidAccount;
  // accountDetails: IAccountDetails[] = kidAccountDetails;
}