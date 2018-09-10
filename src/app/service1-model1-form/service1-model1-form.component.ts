import { Component,OnInit,AfterViewChecked} from '@angular/core';
import * as $ from 'jquery';


//declare and initialize as the global variable
var modelOneList:any[]=[];
export {modelOneList};


@Component({
  selector: 'app-service1-model1-form',
  templateUrl: './service1-model1-form.component.html',
  styleUrls: ['./service1-model1-form.component.scss'],
  // encapsulation: ViewEncapsulation.None
})

export class Service1Model1FormComponent implements OnInit,AfterViewChecked{

  //this is used to control how many times the function inside ngAfterViewChecked() will be run
  private serviceOneCount:number;
  public modelOnePrice:number;
  isFormHidden=false;
  isaiOneHidden=true;
  isBacktoModelHidden=true;
  isaiContentHidden=true;
  isAiResultHidden = true;
  isBacktoModelHidden2=true;
  //table data
  displayedColumns: string[] = ['transactionHash', 'transactionIndex', 'blockHash', 'blockNumber','gasUsed','cumulativeGasUsed'];
  tableData=[];
  jsontemplate = {
      "title": "Business 360", 
      "description": "This is the description of the AI Model", 
      "price": 1.5, 
      "url": "will generate a API for testing", 
      "parameter":
      [{ "name": "Company Size", "value_type": "integer", "value_range": [0,100], "parameter_type":"input" },
       { "name": "Company Type", "value_type": "string" , "value_range": ["private","public"], "parameter_type":"input"},
       { "name": "Industry", "value_type": "int" , "value_range": [0,100], "parameter_type":"input"},
       { "name": "Product1 Purchase Amount", "value_type": "integer" , "value_range": [0,100], "parameter_type":"input"},
       { "name": "Product2 Purchase Amount", "value_type": "integer" , "value_range": [0,100], "parameter_type":"input"},
       { "name": "Product3 Purchase Amount", "value_type": "integer" , "value_range": [0,100], "parameter_type":"input"},
       { "name": "Output1", "value_type": "float" , "parameter_type":"output"},
       { "name": "Output2", "value_type": "float" , "parameter_type":"output"},
       { "name": "Output3", "value_type": "float" , "parameter_type":"output"},
       { "name": "Output4", "value_type": "float" , "parameter_type":"output"}
      ],
      "category": "1", 
      "subcategory": "1" 
  };
  //console.log(jsontemplate);
  jsonSchema = {}
  /*jsonSchema = {
      "Company Size": {"type": "integer"},
      "Company Type": {"type": "string", "enum": ["public", "private"]},
      "Industry": {"type": "integer"},
      "Product1 Purchase Amount": {"type": "integer"},
      "Product2 Purchase Amount": {"type": "integer"},
      "Product3 Purchase Amount": {"type": "integer"},
  }*/
  
  resultSchema ={
    "Output1": {"type": "number"},
    "Output2": {"type": "number"},
    "Output3": {"type": "number"}
  }
  aiResult = {
    "Output1": "0.1",
    "Output2": "0.2",
    "Output3": "0.3"
  }

  ngOnInit() {

    var parameters = this.jsontemplate.parameter;
    var jsonParameter = {};
    parameters.forEach(function(entry){
      if(entry.parameter_type == 'input'){
        var type = {"type": entry.value_type};
        console.log(type);
        jsonParameter[entry.name] = type;
        if(entry.value_type == "string" && entry.value_range !=null){
          console.log(entry.value_range)
          //var enum = ;
          jsonParameter[entry.name].enum = entry.value_range;
        }
      }
    })
    this.jsonSchema = jsonParameter;
    console.log(this.jsonSchema);
    // console.log('inside ngOnInit()');
    
  }


  
  
  //hide the form
  enterAiOne()
  {
    //newly added
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
    window.sessionStorage.setItem('serviceOneParentVisible','true');
    this.isBacktoModelHidden=true;
    this.isBacktoModelHidden2=true;
    this.isaiContentHidden=true;
    this.isFormHidden=false;
  }

  loadAi()
  {
    this.isFormHidden=true;
    this.isaiOneHidden=true;
    this.isBacktoModelHidden=false;
    this.isaiContentHidden=false;
    this.isBacktoModelHidden2=false;
  }
  showAiResult()
  {
    this.isAiResultHidden=false;
  }

  ngAfterViewChecked(){
    $("sOneMOneFormTable").css("width","100%");
    $(".mdl-data-table td,.mdl-data-table th").css({
      "font-weight": "bold",
      "font-size":"16px",
      // "width": "180px",
      "height":"60px",
      // "display": "inline-block",
      "white-space": "nowrap",
      "valign":"middle"
    });
    $("td.mdl-data-table__cell--non-numeric").css({
      "overflow-x":"hidden",
      "overflow-y":"hidden"
    });
	  if ($('#serviceOneContainer').length===1){
		  this.serviceOneCount++;
		  //run only when service 1 is truly rendered
		  if(this.serviceOneCount===1){
				$.ajax({
					url:'http://18.236.104.52:8080/api/accounts',
					type:'GET',
          dataType:'json',
          success:  (data)=>{
            modelOneList=[];
            //why doesn't it work outside?
            this.modelOnePrice=1.5;
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
                      this.modelOnePrice=1.5;
                      var posting =$.get('http://18.236.104.52:8080/api/sendCoin',{address_a:$('#accountSelect').val(), trans_value:this.modelOnePrice*Math.pow(10,18)},(data)=>{
                        data.from=$('#accountSelect').val();
                        // $.get("http://18.236.104.52:8080/api/getBalance?address="+data.from, (data)=>{window.sessionStorage.setItem('currentValue',(data/Math.pow(10,18)).toFixed(2));console.log(window.sessionStorage.getItem('currentValue'));});
                        // data.currentValue=window.sessionStorage.getItem('currentValue');
                        data.value=this.modelOnePrice+" ETH";
                        console.log(JSON.stringify(data));
                        this.tableData.push(data);
                      });
                      posting.done(()=>{
                        window.sessionStorage.setItem('serviceOneParentVisible','false');
                        this.modelOnePrice=1.5;
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
                            this.modelOnePrice=1.5;
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
                        //   $('#transactionHistoryOne').append(`<tr><td>${a.transactionHash}</td><td>${a.transactionIndex}</td><td>${a.blockHash}</td><td>${a.blockNumber}</td><td>${a.gasUsed}</td><td>${a.cumulativeGasUsed}</td></tr>`);
                        // }
                        let a=this.tableData[this.tableData.length-1];
                        $('#transactionHistoryOne').append(`<tr><td class="mdl-data-table__cell--non-numeric">${a.receipt.transactionHash}</td><td class="mdl-data-table__cell--non-numeric">${a.from}</td><td class="mdl-data-table__cell--non-numeric">${a.value}</td><td>${(a.balance/Math.pow(10,18)).toFixed(2)}</td><td>${a.receipt.blockNumber}</td><td>${a.receipt.gasUsed}</td><td>${a.receipt.cumulativeGasUsed}</td></tr>`);
                       
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
    this.modelOnePrice=1.5;
   }

   
  

}
