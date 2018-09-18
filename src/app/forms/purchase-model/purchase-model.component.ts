import { Component, OnInit,isDevMode} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {AimodelService} from '../aimodel.service'
@Component({
  selector: 'app-purchase-model',
  templateUrl: './purchase-model.component.html',
  styleUrls: ['./purchase-model.component.scss']
})
export class PurchaseModelComponent implements OnInit {
  modelList:Object[];
  model$:Observable<string>;
  // TODO: make a class for models in model-data-model.ts instead of using Object type
  selectedModel:Object;
  constructor
  (private route: ActivatedRoute,
    private aimodelService:AimodelService
    ){
    }

  ngOnInit() {
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
      
      if (isDevMode) console.log(JSON.stringify(this.selectedModel));
    }
}
