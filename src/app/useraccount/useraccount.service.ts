import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {tap,catchError,map} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {UserAccount} from './account-data-model';
const httpOptions = {
  headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})
};
@Injectable({
  providedIn: 'root'
})
export class UseraccountService {

  constructor(private http: HttpClient) {}
  getAccount():Observable<Object>
  {
    return this.http.get(environment.accountUrl).pipe(
      map(data=>{return data['account_list'];}),
      tap((accounts:Object) =>localStorage.setItem('accounts',JSON.stringify(accounts))),
      catchError(err=>of(err)));
  }

    // read data of all the accounts that have been saved into localstorage
    get accounts():UserAccount[]
    {
      return JSON.parse(localStorage.getItem('accounts'));
    }

}
