import { Component,DoCheck, OnInit,AfterViewChecked,ViewChild,ChangeDetectorRef } from '@angular/core';
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
  isBacktoModelHidden=true;
  isaiContentHidden=true;
  //table data
  displayedColumns: string[] = ['transactionHash', 'transactionIndex', 'blockHash', 'blockNumber','gasUsed','cumulativeGasUsed'];
  tableData=[];
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    console.log('inside ngOnInit()');
    
  }

  ngDoCheck()
  {
    // console.log('inside Docheck');
    // if(this.sort!==undefined){this.tableData.sort = this.sort;}
    // else{console.log('sort undefined')}
  }

  
  
  //hide the form
  enterAiOne()
  {
    // $.get('http://18.236.104.52:8080/api/accounts',(data)=>{console.log(data.account_list)});
    console.log('original length:'+this.tableData.length);
    $(this.tableData).change(()=>{console.log('changed'+this.tableData.length)})
    this.isFormHidden=true;
    this.isaiOneHidden=false;
    this.isBacktoModelHidden=false;
    console.log($('#transactionHistory'));
   
//     $('div>div.container').prepend(`
//     <table mat-table [dataSource]="tableData" matSort class=\"mat-elevation-z8\">
      
//     <ng-container matColumnDef=\"transactionHash\">
//       <th mat-header-cell *matHeaderCellDef mat-sort-header> TxHash </th>
//       <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>
//     </ng-container>
  
    
//     <ng-container matColumnDef=\"transactionIndex\">
//       <th mat-header-cell *matHeaderCellDef mat-sort-header> TxIndex </th>
//       <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>
//     </ng-container>
  
    
//     <ng-container matColumnDef=\"blockHash\">
//       <th mat-header-cell *matHeaderCellDef mat-sort-header> BlockHash </th>
//       <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>
//     </ng-container>
  
    
//     <ng-container matColumnDef=\"blockNumber\">
//       <th mat-header-cell *matHeaderCellDef mat-sort-header> Block No. </th>
//       <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>
//     </ng-container>
  
//     <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>
//     <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>
//   </table>

// `);
//   this.cd.detectChanges();
    // console.log('hideform')
  }
  // leaveAiOne()
  // {
  // this.isFormHidden=!this.isFormHidden;
  // this.isaiOneHidden=!this.isaiOneHidden;
  // }
  
  //Handler function for ajax

  backToModel()
  {
    this.isaiOneHidden=true;
    window.sessionStorage.clear();
    window.sessionStorage.setItem('serviceOneParentVisible','true');
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

  ngAfterViewChecked(){
	  if ($('#serviceOneContainer').length===1){
		  this.serviceOneCount++;
		  //run only when service 1 is truly rendered
		  if(this.serviceOneCount===1){
        if (this.tableData!=null){
        // console.log('tableData is not null and create sort object');
        // this.tableData.sort = this.sort;
      }

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
                    $('#purchase').submit(()=>{
                      this.modelOnePrice=15;
                      var posting =$.get('http://18.236.104.52:8080/api/sendCoin',{address_a:$('#accountSelect').val(), trans_value:this.modelOnePrice*Math.pow(10,18)},(data)=>{
                        this.tableData.push(data);
                      });
                      posting.done(()=>{
                        window.sessionStorage.clear();
                        window.sessionStorage.setItem('serviceOneParentVisible','false');
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
                        $("tbody>tr").remove();
                        for (let a of this.tableData)
                        {
                          $('#transactionHistory').append(`<tr><td>${a.transactionHash}</td><td>${a.transactionIndex}</td><td>${a.blockHash}</td><td>${a.blockNumber}</td><td>${a.gasUsed}</td><td>${a.cumulativeGasUsed}</td></tr>`);
                        }
                
                
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
  constructor(private cd: ChangeDetectorRef) {
    this.serviceOneCount=0;
    this.modelOnePrice=15;
   }

   
  

}
