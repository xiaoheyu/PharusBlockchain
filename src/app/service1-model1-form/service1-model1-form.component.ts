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
  isaiHeaderHidden=true;
  isAiResultHidden = true;
  isBacktoModelHidden2=true;
  //table data
  displayedColumns: string[] = ['transactionHash', 'transactionIndex', 'blockHash', 'blockNumber','gasUsed','cumulativeGasUsed'];
  tableData=[];
  jsontemplate = {
"title": "Business 360 Product Preference Prediction", 
"description": "This model is used to predict whehter a user is going to purchase three designated type of products. The model is trained based on thousouds of users purchase history. The inputs of the model related to a user's basic information and recent purchase records. The output of the model are the condidence score that user will purchase a type of product in the near future", 
"price": 1.5, 
"url": "http://13.59.147.207:5000/products/", 
"parameter":
[{ "display_name": "Age", "name": "age", "value_type": "numeric", "value_range": [0,100], "parameter_type":"input" }, 
  { "display_name": "Gender", "name": "gender", "value_type": "categorical" , "value_range": [0,1], "display_range": ["Male", "Female"],"parameter_type":"input"}, 
  { "display_name": "Income","name": "income", "value_type": "numeric" , "value_range": [], "parameter_type":"input"},
  {
      "display_name": "Head of household",
      "name": "headOfhousehold",
      "value_type": "categorical",
      "value_range": [0, 1],
      "display_range": ["No", "Yes"],
      "parameter_type": "input"
  },
  { "display_name": "Number of household",  "name": "noOfhousehold", "value_type": "numeric" , "value_range": [1,100], "parameter_type":"input"},
  { "display_name": "Month of Residence",  "name": "monthOfresidence", "value_type": "numeric" , "value_range": [1,1000], "parameter_type":"input"},
  { "display_name": "Amount of purchasing Product 1 in Last 30 days",  "name": "t1_30", "value_type": "numeric" , "value_range": [], "parameter_type":"input"},
  { "display_name": "Amount of purchasing Product 2 in Last 30 days",  "name": "t2_30", "value_type": "numeric" , "value_range": [], "parameter_type":"input"},
  { "display_name": "Amount of purchasing Product 3 in Last 30 days",  "name": "t3_30", "value_type": "numeric" , "value_range": [], "parameter_type":"input"},   
  { "display_name": "Amount of purchasing Product 1 in Last 10 days",  "name": "t1_10", "value_type": "numeric" , "value_range": [], "parameter_type":"input"},
  { "display_name": "Amount of purchasing Product 2 in Last 10 days",  "name": "t2_10", "value_type": "numeric" , "value_range": [], "parameter_type":"input"},
  { "display_name": "Amount of purchasing Product 3 in Last 10 days",  "name": "t3_10", "value_type": "numeric" , "value_range": [], "parameter_type":"input"},
  { "display_name": "Amount of purchasing Product 1 in Last 3 days",  "name": "t1_3", "value_type": "numeric" , "value_range": [], "parameter_type":"input"},
  { "display_name": "Amount of purchasing Product 2 in Last 3 days",  "name": "t2_3", "value_type": "numeric" , "value_range": [], "parameter_type":"input"},
  { "display_name": "Amount of purchasing Product 3 in Last 3 days",  "name": "t3_3", "value_type": "numeric" , "value_range": [], "parameter_type":"input"},
  { "display_name": "Confidence Score to not purchase anything",  "name": "buyType1", "value_type": "numeric" , "parameter_type":"output"}, 
  { "display_name": "Confidence Score to Purchase Product 1",  "name": "buyType2", "value_type": "numeric" , "parameter_type":"output"}, 
  { "display_name": "Confidence Score to Purchase Product 2",  "name": "buyType3", "value_type": "numeric" , "parameter_type":"output"}, 
  { "display_name": "Confidence Score to Purchase Product 3",  "name": "buyType4", "value_type": "numeric" , "parameter_type":"output"}
],
"category": "1", 
"subcategory": "1" 
}
  //console.log(jsontemplate);
  jsonSchema = {}
  submittedData = {}
  resultSchema = []
  paraNamePair = {}
  enumPair ={}

  ngOnInit() {

    var parameters = this.jsontemplate.parameter;
    var jsonParameter = {};
    var paraNamePair = {};
    var enumPair ={};

    parameters.forEach(function(entry){
      if(entry.parameter_type == 'input'){
        paraNamePair[entry.display_name] = entry.name;
        if(entry.value_type == 'numeric'){
          var type = {"type": "number"};
        }else{
          var type = {"type": "string"};
        }
        jsonParameter[entry.display_name] = type;
        if(entry.value_type == "categorical"){
          jsonParameter[entry.display_name].enum = entry.display_range;
          var temp = {};
          temp[entry.display_range[0]] = entry.value_range[0];
          temp[entry.display_range[1]] = entry.value_range[1];
          enumPair[entry.display_name] = temp;
        }
      }
    })
    this.paraNamePair = paraNamePair;
    this.enumPair = enumPair;
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
    this.isaiHeaderHidden=true;
    this.isFormHidden=false;
  }

  loadAi()
  {
    this.isFormHidden=true;
    this.isaiOneHidden=true;
    this.isBacktoModelHidden=false;
    this.isaiContentHidden=false;
    this.isaiHeaderHidden=false;
    this.isBacktoModelHidden2=false;
  }
  showAiResult()
  {
    this.isAiResultHidden=false;
    var model_url = this.jsontemplate.url;
    var dataReceived = this.submittedData;
    var paraNameMap = this.paraNamePair;
    var enumMap = this.enumPair;
    var dataTobeSent = {};
    Object.keys(dataReceived).forEach(function(key) {
      dataTobeSent[paraNameMap[key]] = dataReceived[key];
      if(key in enumMap){
        dataTobeSent[paraNameMap[key]] = enumMap[key][dataReceived[key]];
      }
    })
    console.log(dataTobeSent);

    $.ajax({
          url: model_url,
          type:'POST',
          contentType: "application/json",
          dataType:'json',
          data: JSON.stringify(dataTobeSent),
          success:  (data)=>{
            console.log(data);
        
          },
          error:function(err){
            console.log(err)
          }
    });
    var output =[
      {parameter:"buyType1", type: "number", value: 0.1},
      {parameter: "buyType2", type: "number", value: 0.2},
      {parameter:"buyType3", type: "number", value: 0.4},
      {parameter:"buyType4", type: "number", value: 0.3},
    ]
    this.resultSchema = output;
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
