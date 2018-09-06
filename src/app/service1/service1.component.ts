import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {AddModelComponent} from '../forms/add-model/add-model.component';
import {AimodelService} from '../forms/aimodel.service';
import {url} from '../forms/model-data-model';
@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.scss'],

})
export class Service1Component implements OnInit {
  modelList:Object[];
  selectedModel:number;
  showModels:boolean=true;
  constructor(public dialog:MatDialog,private aimodelservice:AimodelService){}
  openDialog():void
  {
    const dialogRef = this.dialog.open(AddModelComponent, {
      data: {}
    });
    dialogRef.afterClosed()
             .subscribe(() => {
                this.aimodelservice.getModel(url)
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

  selectModel(id:number):void
  {
    console.log('you selected id:'+id);
    this.showModels=!this.showModels;
    this.selectedModel=id;
    console.log(this.showModels);
    
  }

  public ngOnInit(){
    this.modelList=JSON.parse(localStorage.getItem('models'));
  };

}
