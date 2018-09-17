import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-purchase-model',
  templateUrl: './purchase-model.component.html',
  styleUrls: ['./purchase-model.component.scss']
})
export class PurchaseModelComponent implements OnInit {
  // TODO: make a class for models in model-data-model.ts instead of using Object type
  selectedModel:Observable<string>;
  constructor
  (
    private route: ActivatedRoute,
  )
   { }

  ngOnInit() {

    this.selectedModel = this.route.paramMap.pipe(
      map((params: ParamMap) =>
        {
        
        return params.get('modelId')
        
        } 
    )
  );
  console.log(this.selectedModel);
  }

}
