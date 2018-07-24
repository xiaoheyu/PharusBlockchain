import { Component,ViewEncapsulation,OnInit  } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  tabBackgroundColor="primary";
  tabColor="accent";
  ngOnInit()
  {
    console.log("navbar init!");
    $(document).ready(()=>{
      $("button.mat-button.mat-raised-button").css("color","white");
      $("div p.col-lg-12.col-md-12.col-sm-12.col-xs-12").css("height","60px");
    });
  }
}
