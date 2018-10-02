import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {map} from 'rxjs/operators';
import {AddModelComponent} from '../forms/add-model/add-model.component';
import {AimodelService} from '../forms/aimodel.service';
import {ModelCategory} from '../forms/model-data-model';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.scss'],

})
export class Service1Component implements OnInit {
  modelCategories:ModelCategory[];
  modelList:Object[];
  displayModelList:Object[];
  selectedModel:number;
  category$:Observable<string>;
  selectedCategory:ModelCategory;


  constructor
  (
    public dialog:MatDialog,
    private aimodelservice:AimodelService,
    private route: ActivatedRoute,
    private router: Router,){
  }
  openDialog():void
  {
    const dialogRef = this.dialog.open(AddModelComponent, {
      data: {}
    });
    dialogRef.afterClosed()
             .subscribe(() => {
                this.aimodelservice.getModel()
                .subscribe(
                  // update models in localstorage
                  ()=>
                  {
                    this.modelList=this.aimodelservice.models;
                    console.log(this.modelList);
                  }
                );
              });
  }

  public ngOnInit(){
    this.aimodelservice.getModel()
    .subscribe(
        // update models in localstorage
        ()=>{
          this.modelList=this.aimodelservice.models;
        }
      );
    this.aimodelservice.getCategories().subscribe(categories=>this.modelCategories=categories);
    this.modelList=JSON.parse(localStorage.getItem('models'));
    this.category$ = this.route.paramMap.pipe(
      map((params: ParamMap) =>
        {
        
        return params.get('abbr')
        
        } 
    )
  );
    this.category$.subscribe
    (
      (categoryAbbr)=>{this.modelCategories.forEach(category=>
        {
          if (category['abbr']===categoryAbbr)
          {
          this.selectedCategory=category;
          this.displayModelList=this.modelList.filter(model=>model['category']===category.categoryId);
          }
        }
      )}
    );

    
  };

}
