import { Component,ViewChild, OnInit } from '@angular/core';
import {AimodelService} from '../forms/aimodel.service';
import {ModelCategory} from '../forms/model-data-model';
import {MatMenuTrigger} from '@angular/material';
@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  @ViewChild('menuTriggerOne',{read:MatMenuTrigger})
  menuOne:MatMenuTrigger;

  modelCategories:ModelCategory[];
  constructor(private aimodelservice:AimodelService) { }

  ngOnInit() {
    // get all model info from model-data-model
    this.aimodelservice.getCategories().subscribe(categories=>this.modelCategories=categories);
    console.log(this.modelCategories);
  }

  trigger()
  {
    console.log('triggered!');
    this.menuOne.openMenu();
  }

  close()
  {
  
    this.menuOne.closeMenu();
  }

}
