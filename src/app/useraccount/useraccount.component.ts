import { Component, OnInit,AfterViewChecked } from '@angular/core';
import * as $ from 'jquery';
// import * as blockieGen from 'ethereum-blockies';

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
  avatars:any[];
  ngOnInit() {
    this.userAccountCount=0;
    listCount=1;
    // $(document).ready(function(){
    //   this.avatars=$("span.example-header-image");
    //   var opt = { scale: 7, size: 10}
    //   var icon = blockieGen.create(opt);
    //   for(let avatar of this.avatars)
    //   {
    //     icon = blockieGen.create(opt);
    //     avatar.append(icon);
    //   }
    // });
    

    

  }

  successAjax(data){
    for (let i of data.account_list){
        accountList.push(i); 
    };
    
    for (let i of accountList){
      $('#address'+listCount).text(i.account);
      $('#balance'+listCount).text((i.balance/Math.pow(10,18)).toFixed(2));
      $('#balance'+listCount).append('<span class=\"balanceUnit\"> ETH</span>')
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
        //debug
        // console.log('account visited');
        // console.log(listCount);
        for (let i=1;i<11;i++)
        {
          // console.log(i)
          $('#address'+i).text("");
          $('#balance'+i).text("");
        }
				$.ajax({
					url:'http://18.236.104.52:8080/api/accounts',
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
