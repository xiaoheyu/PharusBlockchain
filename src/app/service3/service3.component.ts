import { Component, OnInit,DoCheck } from '@angular/core';

@Component({
  //checkpoint
  selector: 'app-service3',
  templateUrl: './service3.component.html',
  styleUrls: ['./service3.component.scss']
})
//checkpoint
export class Service3Component implements OnInit,DoCheck {

  //checkpoint
  serviceThreeParentVisible:string;
  ngDoCheck()
  {
    //checkpoint
    this.serviceThreeParentVisible=sessionStorage.getItem('serviceThreeParentVisible')==='true'?'flex':'none';
    console.log(this.serviceThreeParentVisible);
  }
  constructor() { }

  ngOnInit() {
    //checkpoint
    window.sessionStorage.setItem('serviceThreeParentVisible','true');
  }

}
