import { Component,ViewChild, OnInit,isDevMode} from '@angular/core';
import {AimodelService} from '../forms/aimodel.service';
import {ModelCategory} from '../forms/model-data-model';
import {MatMenuTrigger} from '@angular/material';
@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  // get the reference of the button instead of the menu element, or it won't work
  // but why??
  @ViewChild('aiMenu',{read:MatMenuTrigger})
  aiMenu:MatMenuTrigger;

  @ViewChild('accountMenu',{read:MatMenuTrigger})
  accountMenu:MatMenuTrigger;

  @ViewChild('ediMenu',{read:MatMenuTrigger})
  ediMenu:MatMenuTrigger;

  modelCategories:ModelCategory[];
  constructor(private aimodelservice:AimodelService) { }

  ngOnInit() {
    // get all model info from model-data-model
    this.aimodelservice.getCategories().subscribe(categories=>this.modelCategories=categories);
    if (isDevMode()){
    console.log('topnavbar testing');
    console.log(this.modelCategories);
    }
  }

  toggleAccount()
  {
    this.accountMenu.toggleMenu();
  }

  toggleAi()
  {
    this.aiMenu.toggleMenu();
  }

  toggleEdi()
  {
    this.ediMenu.toggleMenu();
  }

  

}
