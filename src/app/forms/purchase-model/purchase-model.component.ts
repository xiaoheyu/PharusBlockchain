import { Component, OnInit, isDevMode} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AimodelService} from '../aimodel.service';
import {UseraccountService} from '../../useraccount/useraccount.service';
import {UserAccount} from '../../useraccount/account-data-model';
import {receiptChartColumn} from '../model-data-model';
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

  receipts:Object[];
  receiptsArray:Object[];
  isPurchaseCompleted:boolean;
  transactionError:string;

  receiptChartColumn:string[]=receiptChartColumn;
  latestReceipt:Object;

  constructor
  ( private route: ActivatedRoute,
    private aimodelService:AimodelService,
    private useraccount:UseraccountService,
    private router:Router,
    private _formBuilder: FormBuilder){
    }

  ngOnInit() {
    this.receiptChartColumn=receiptChartColumn;
    this.isPurchaseCompleted=false;
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

    purchase()
    {
      this.transactionError=null;
      console.log(this.accountListFormGroup.value['selectedAccount'],this.selectedModel['price']*Math.pow(10,18));
      this.aimodelService.purchaseModel(this.accountListFormGroup.value['selectedAccount'],(this.selectedModel['price']*Math.pow(10,18)).toString())
      .subscribe(receipt=>{
        if (receipt.hasOwnProperty('error')){
          this.transactionError=receipt.error.text;
          console.log(receipt.error.text);
          console.log(this.isPurchaseCompleted);
        }
        else{
            this.isPurchaseCompleted=true;
            this.aimodelService.pushReceipt(this.accountListFormGroup.value['selectedAccount'],receipt);
            this.receipts=this.aimodelService.receipts;
            this.receiptsArray=[];
            for (let prop of Object.keys(this.receipts)){
                this.receiptsArray.push(this.receipts[prop])
              }
            this.latestReceipt=this.flattenObject(this.receiptsArray[this.receiptsArray.length-1]);
            console.log(this.latestReceipt)
        };
        this.refreshAccounts();
      });
    }

    // refresh accounts info after purchase
    refreshAccounts(){
        this.useraccount.getAccount().subscribe();
        this.accountList=JSON.parse(localStorage.getItem('accounts'));
        for (let i=0;i<this.accountList.length;i++){
          this.accountList[i].balance/=Math.pow(10,18);
        }
      }
// flatten a receipt to a one-layer object
flattenObject(ob:Object):Object {
        let toReturn = {};
        
        for (let i in ob) {
          if (!ob.hasOwnProperty(i)) continue;
          
          if ((typeof ob[i]) === 'object') {
            let flatObject =this.flattenObject(ob[i]);
            for (let x in flatObject) {
              if (!flatObject.hasOwnProperty(x)) continue;
              
              toReturn[i + '.' + x] = flatObject[x];
            }
          } else {
            toReturn[i] = ob[i];
          }
        }
        return toReturn;
      };

}
