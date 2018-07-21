import { Component,DoCheck, OnInit,AfterViewChecked,ViewChild } from '@angular/core';
import * as $ from 'jquery';
import {MatSort, MatTableDataSource} from '@angular/material';

//declare and initialize as the global variable
var modelOneList:any[]=[];
export {modelOneList};


@Component({
  selector: 'app-service1-model1-form',
  templateUrl: './service1-model1-form.component.html',
  styleUrls: ['./service1-model1-form.component.scss'],
  // encapsulation: ViewEncapsulation.None
})

export class Service1Model1FormComponent implements OnInit,AfterViewChecked,DoCheck {

  //this is used to control how many times the function inside ngAfterViewChecked() will be run
  private serviceOneCount:number;
  public modelOnePrice:number;
  isFormHidden=false;
  isaiOneHidden=true;
  //table data
  displayedColumns: string[] = ['transactionHash', 'transactionIndex', 'blockHash', 'blockNumber','gasUsed','cumulativeGasUsed'];
  tableData;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    console.log('inside ngOnInit()');
    
  }

  ngDoCheck()
  {
    console.log('inside Docheck');
    if(this.sort!==undefined){this.tableData.sort = this.sort;}
    else{console.log('sort undefined')}
  }

  
  
  //hide the form
  toggleAiOne()
  {
    // $.get('http://18.236.104.52:8080/api/accounts',(data)=>{console.log(data.account_list)});
    this.isFormHidden=!this.isFormHidden;
    this.isaiOneHidden=!this.isaiOneHidden;
    // console.log('hideform')
  }

  
  //Handler function for ajax



  ngAfterViewChecked(){
	  if ($('#serviceOneContainer').length===1){
		  this.serviceOneCount++;
		  //run only when service 1 is truly rendered
		  if(this.serviceOneCount===1){
        if (this.tableData!=null){
        console.log('tableData is not null and create sort object');
        this.tableData.sort = this.sort;
      }
        let dataSource;
				$.ajax({
					url:'http://18.236.104.52:8080/api/accounts',
					type:'GET',
          dataType:'json',
          success:  (data)=>{
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
                    $('#purchase').submit((event)=>{
                      var dataSource;
                      let transactionRecord=[];
                      // event.preventDefault();
                      // var $form=$(this),
                      // url=$form.attr('action');
                      this.modelOnePrice=15;
                      var posting =$.get('http://18.236.104.52:8080/api/sendCoin',{address_a:$('#accountSelect').val(), trans_value:this.modelOnePrice*Math.pow(10,18)},(data)=>{
                        transactionRecord.push(data);
                        this.tableData= new MatTableDataSource(transactionRecord);
                        console.log(this);
                        this.ngOnInit();
                        
                      });
                      posting.done(()=>{
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
  
  onSubmit(form){
    alert(form.value);
    
  }
  constructor() {
    this.serviceOneCount=0;
    this.modelOnePrice=15;
   }

   
  

}
