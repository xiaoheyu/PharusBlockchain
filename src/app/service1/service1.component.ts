import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {map} from 'rxjs/operators';

import {AddModelComponent} from '../forms/add-model/add-model.component';
import {AimodelService} from '../forms/aimodel.service';
import {modelcategories,ModelCategory} from '../forms/model-data-model';
import {environment} from '../../environments/environment';
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
  selectedCategory:Observable<string>;
  // showModels:boolean=true;


  constructor
  (
    public dialog:MatDialog,
    private aimodelservice:AimodelService,
    private route: ActivatedRoute,
    private router: Router,
  )
  {}
  openDialog():void
  {
    const dialogRef = this.dialog.open(AddModelComponent, {
      data: {}
    });
    dialogRef.afterClosed()
             .subscribe(() => {
                this.aimodelservice.getModel(environment.url)
                .subscribe(
                  // update models in localstorage
                  ()=>
                  {
                    this.modelList=JSON.parse(localStorage.getItem('models'));
                    console.log(this.modelList);
                  }
                );
              });
  }

  // selectModel(id:number):void
  // {
  //   console.log('you selected id:'+id);
  //   this.showModels=!this.showModels;
  //   this.selectedModel=id;
  //   console.log(this.showModels);
    
  // }

  public ngOnInit(){
    this.aimodelservice.getCategories().subscribe(categories=>this.modelCategories=categories);
    this.modelList=JSON.parse(localStorage.getItem('models'));
    this.selectedCategory = this.route.paramMap.pipe(
      map((params: ParamMap) =>
        {
        
        return params.get('abbr')
        
        } 
    )
  );
    this.selectedCategory.subscribe
    (
      (categoryAbbr)=>{this.modelCategories.forEach(m=>
        {
          if (m['abbr']===categoryAbbr)
          {
          // this.selectedCategory=e;
          console.log(m.categoryId);
          this.displayModelList=this.modelList.filter(model=>model['category']===m.categoryId);
          console.log(this.displayModelList);
          }
        }
      )}
    );

    
  };

}
