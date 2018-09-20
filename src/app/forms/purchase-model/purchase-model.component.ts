import { Component, OnInit, isDevMode} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AimodelService} from '../aimodel.service';
import {UseraccountService} from '../../useraccount/useraccount.service';
import {UserAccount} from '../../useraccount/account-data-model';
@Component({
  selector: 'app-purchase-model',
  templateUrl: './purchase-model.component.html',
  styleUrls: ['./purchase-model.component.scss']
})
export class PurchaseModelComponent implements OnInit {
  modelList:Object[];
  // an Observable that provides the parameter of model in routing
  model$:Observable<string>;
  // an Observable that provides the parameter of model category in routing
  category$:Observable<string>;
  // TODO: make a class for models in model-data-model.ts instead of using Object type
  selectedModel:Object;
  modelCategory:string;
  
  accountList:UserAccount[];
  accountListFormGroup: FormGroup;
  
  selectedAccount:UserAccount;
  selectedAccountBalance:number;

  constructor
  ( private route: ActivatedRoute,
    private aimodelService:AimodelService,
    private useraccount:UseraccountService,
    private router:Router,
    private _formBuilder: FormBuilder){
    }

  ngOnInit() {
    // read the account list from localStorage
    this.accountList=this.useraccount.accounts;
    // convert the token unit
    for (let i=0;i<this.accountList.length;i++){
      this.accountList[i].balance/=Math.pow(10,18);
    }
    // Build a reactive form for user to choose an available account
    this.accountListFormGroup = this._formBuilder.group({
      selectedAccount: ['', Validators.required]
    });
    this.formOnChanges();
    // fetch all models from localStorage
    this.modelList=this.aimodelService.models;
    this.model$ = this.route.paramMap.pipe(
      map((params: ParamMap) =>{
        return params.get('modelId')
        })
      );
    
      this.model$.subscribe(modelId=>{
        this.modelList.forEach(model=>{
          if (Number(model['id'])===Number(modelId)){
            this.selectedModel=model;
          }
        });
      });

      this.category$ = this.route.paramMap.pipe(
        map((params: ParamMap) =>{
          return params.get('abbr');
          })
        );
      this.category$.subscribe(category=>
        this.modelCategory=category
      )
      
      if (isDevMode) {
        console.log('Model detail:\n'+JSON.stringify(this.selectedModel));

      }
    }


    goBackToService()
    {
      this.router.navigate([this.modelCategory]);
    }

    formOnChanges()
    {
      this.accountListFormGroup.valueChanges.subscribe(
        val=> { this.accountList.forEach(account=>{
          if (val['selectedAccount']===account.account)
          this.selectedAccountBalance=account.balance;}
          ) }
      )
    }

}
