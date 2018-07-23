import { Component, OnInit,AfterViewChecked } from '@angular/core';
import * as $ from 'jquery';

//declare and initialize as the global variable
var modelOneList:any[]=[];
export {modelOneList};


@Component({
  selector: 'app-service3-model1-form',
  templateUrl: './service3-model1-form.component.html',
  styleUrls: ['./service3-model1-form.component.scss'],
  // encapsulation: ViewEncapsulation.None
})

export class Service3Model1FormComponent implements OnInit,AfterViewChecked {

  //this is used to control how many times the function inside ngAfterViewChecked() will be run
  private serviceOneCount:number;
  public modelOnePrice:number;
  isFormHidden=false;
  isaiOneHidden=true;
  isBacktoModelHidden=true;
  isaiContentHidden=true;
  //table data
  displayedColumns: string[] = ['transactionHash', 'transactionIndex', 'blockHash', 'blockNumber','gasUsed','cumulativeGasUsed'];
  tableData=[];
  
  //hide the form
  enterAiThree()
  {
    console.log($('#accountSelect').val());
    if ($('#accountSelect').val()!==null){
    this.isFormHidden=true;
    this.isaiOneHidden=false;
    this.isBacktoModelHidden=false;
    }
  }

  //Handler function for ajax

  backToModel()
  {
    this.isaiOneHidden=true;
    window.sessionStorage.setItem('serviceThreeParentVisible','true');
    this.isBacktoModelHidden=true;
    this.isaiContentHidden=true;
    this.isFormHidden=false;
  }

  loadAi()
  {
    this.isFormHidden=true;
    this.isaiOneHidden=true;
    this.isBacktoModelHidden=false;
    this.isaiContentHidden=false;
  }


  //Handler function for ajax
  


  ngAfterViewChecked(){
	  if ($('#serviceThreeContainer').length===1){
		  this.serviceOneCount++;
		  //run only when service 1 is truly rendered
		  if(this.serviceOneCount===1){
				$.ajax({
					url:'http://18.236.104.52:8080/api/accounts',
					type:'GET',
          dataType:'json',
          success:(data)=>{
            modelOneList=[];
            //why doesn't it work outside?
            this.modelOnePrice=15;
            for (let i of data.account_list){
              if (Number(i['balance'])>=this.modelOnePrice*Math.pow(10,18)){
                modelOneList.push(i);
              }
            };
            $("option").remove();
            $('select').append('<option disabled selected value >Your available accounts for MODEL 1</option>');
            for (let i of modelOneList){
              $('select').append('<option value='+i.account+'>'+'Account address: '+i.account+' Balance: '+(i.balance/Math.pow(10,18)).toFixed(2)+'</option>');
              };
          },
					error:function(){
						alert('error reading accounts!');
					}
        });

                    //submit form using ajax
                    $('#purchase').submit(()=>{
                      this.modelOnePrice=15;
                      var posting =$.get('http://18.236.104.52:8080/api/sendCoin',{address_a:$('#accountSelect').val(), trans_value:this.modelOnePrice*Math.pow(10,18)},(data)=>{
                        data.from=$('#accountSelect').val()
                        // $.get("http://18.236.104.52:8080/api/getBalance?address="+data.from, (data)=>{window.sessionStorage.setItem('currentValue',(data/Math.pow(10,18)).toFixed(2));console.log(window.sessionStorage.getItem('currentValue'));});
                        // data.currentValue=window.sessionStorage.getItem('currentValue');
                        data.value=this.modelOnePrice+" ETH";
                        console.log(JSON.stringify(data));
                        this.tableData.push(data);
                      });
                      posting.done(()=>{
                        window.sessionStorage.setItem('serviceThreeParentVisible','false');
                        this.modelOnePrice=15;
                        $("option").remove();
                        $.ajax({
                          url:'http://18.236.104.52:8080/api/accounts',
                          type:'GET',
                          dataType:'json',
                          success:function(data)
                          {
                            $('select').append('<option selected value=\'\'>Your available accounts for MODEL 1</option>');
                            modelOneList=[];
                            //why doesn't it work outside?
                            this.modelOnePrice=15;
                            for (let i of data.account_list){
                              if (Number(i['balance'])>=this.modelOnePrice*Math.pow(10,18)){
                                modelOneList.push(i);
                              }
                            };
                            for (let i of modelOneList){
                              $('select').append('<option value='+i.account+'>'+'Account address: '+i.account+' Balance: '+(i.balance/Math.pow(10,18)).toFixed(2)+'</option>');
                            };
                          }
                        });

                        // $("tbody>tr").remove();
                        // for (let a of this.tableData)
                        // {
                        //   console.log(a);
                        //   $('#transactionHistoryOne').append(`<tr><td>${a.transactionHash}</td><td>${a.from}</td><td>${a.value}</td><td>${a.currentValue}</td><td>${a.transactionIndex}</td><td>${a.blockHash}</td><td>${a.blockNumber}</td><td>${a.gasUsed}</td><td>${a.cumulativeGasUsed}</td></tr>`);
                        // }
                        let a=this.tableData[this.tableData.length-1];
                        $('#transactionHistoryOne').append(`<tr><td class="mdl-data-table__cell--non-numeric">${a.receipt.transactionHash}</td><td class="mdl-data-table__cell--non-numeric">${a.from}</td><td class="mdl-data-table__cell--non-numeric">${a.value}</td><td>${(a.balance/Math.pow(10,18)).toFixed(2)}</td><td>${a.receipt.blockNumber}</td><td>${a.receipt.gasUsed}</td><td>${a.receipt.cumulativeGasUsed}</td></tr>`);
                        $(".mdl-data-table td,.mdl-data-table th").css({
                          "font-weight": "bold",
                          "width": "150px",
                          "height":"60px",
                          "display": "inline-block",
                          "white-space": "nowrap",
                          "valign":"middle"
                        });
                        $("td.mdl-data-table__cell--non-numeric").css({
                          "overflow":"auto"
                        });
                      });
                    });

		  } 
	  }
	 //reset the count whenever Service 1 component is no longer rendered 
	  else
	  {
		  this.serviceOneCount=0;
	  }
  }
  

  constructor() {
    this.serviceOneCount=0;
    this.modelOnePrice=15;
   }

  ngOnInit() {
    
  }

}
