import { Component, OnInit,DoCheck } from '@angular/core';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.scss'],

})
export class Service1Component implements OnInit,DoCheck {

  serviceOneParentVisible:string;
  ngDoCheck()
  {
    this.serviceOneParentVisible=sessionStorage.getItem('serviceOneParentVisible')==='true'?'flex':'none';
    console.log(this.serviceOneParentVisible);
  }

  public ngOnInit(){
    window.sessionStorage.clear();
    window.sessionStorage.setItem('serviceOneParentVisible','true');
  };

}
