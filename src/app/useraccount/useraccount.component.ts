import { Component, OnInit,AfterViewChecked } from '@angular/core';
import * as $ from 'jquery';

var accountList:any[]=[];
var listCount:number;
export {accountList,listCount};

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.scss']
})
export class UseraccountComponent implements OnInit,AfterViewChecked {
  private userAccountCount:number;
  constructor() { }
  listCount:number;
  ngOnInit() {
    this.userAccountCount=0;
    listCount=1;

  }

  successAjax(data){
    for (let i of data.account_list){
        accountList.push(i); 
    };
    
    for (let i of accountList){
      $('#address'+listCount).text(i.account);
      $('#balance'+listCount).text("Balance: "+(i.balance/Math.pow(10,18)).toFixed(3));
      $('#balance'+listCount).append('<span class=\"balanceUnit\" style=\"font-size: 50%;color:gray;\"> ETH</span>')
      listCount++;
      };
      
  }

  ngAfterViewChecked(){
	  if ($('#accountsContainer').length===1){
		  this.userAccountCount++;
		  //run only when service 1 is truly rendered
		  if(this.userAccountCount===1){
        listCount=1;
        accountList=[];
        console.log('account visited');
        console.log(listCount);
        for (let i=1;i<11;i++)
        {
          console.log(i)
          $('#address'+i).text("");
          $('#balance'+i).text("");
        }
				$.ajax({
					url:'http://18.236.104.52:8080/accounts',
					type:'GET',
          dataType:'json',
          success:this.successAjax,
					error:function(){
						alert('error reading accounts!');
					}
        });
		  } 
	  }
	 //reset the count whenever Service 1 component is no longer rendered 
	  else
	  {
		  this.userAccountCount=0;
	  }
  }

}
