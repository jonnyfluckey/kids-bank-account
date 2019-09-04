import { Component, OnInit, Input } from '@angular/core';
import {IAccount} from '../account';

import kidAccount from '../kidaccounts.json';

@Component({
  selector: 'app-profile-select',
  templateUrl: './profile-select.component.html',
  styleUrls: ['./profile-select.component.css']
})
export class ProfileSelectComponent implements OnInit {
  
  accounts: IAccount[] = kidAccount;

  constructor() { }
  
  ngOnInit() {
  }
  
}
