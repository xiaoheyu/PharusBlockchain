import { Component, OnInit,DoCheck } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddModelComponent} from '../forms/add-model/add-model.component'
@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.scss'],

})
export class Service1Component implements OnInit,DoCheck {

  constructor(public dialog:MatDialog){}
  openDialog():void
  {
    const dialogRef = this.dialog.open(AddModelComponent, {
      data: {}
    });
  }

  
  serviceOneParentVisible:string;
  ngDoCheck()
  {
    this.serviceOneParentVisible=sessionStorage.getItem('serviceOneParentVisible')==='true'?'flex':'none';
  }

  public ngOnInit(){
    window.sessionStorage.setItem('serviceOneParentVisible','true');
  };

}
