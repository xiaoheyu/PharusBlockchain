import { Component,OnInit,isDevMode} from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {AimodelService} from '../aimodel.service';

//declare and initialize as the global variable
var modelOneList:any[]=[];
export {modelOneList};

@Component({
  selector: 'app-aiform-model',
  templateUrl: './aiform-model.component.html',
  styleUrls: ['./aiform-model.component.scss']
})
export class AiformModelComponent implements OnInit{
  modelList:Object[];
  // an Observable that provides the parameter of model in routing
  model$:Observable<string>;
  // an Observable that provides the parameter of model category in routing
  category$:Observable<string>;
  // TODO: make a class for models in model-data-model.ts instead of using Object type
  selectedModel:Object;
  modelCategory:string;

  isAiResultHidden = true;
  jsontemplate1 = {
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
  jsontemplate:Object
  jsonSchema = {}
  submittedData = {}
  resultSchema = []
  paraNamePair = {}
  enumPair ={}
  outputPair = {}

  constructor(
  	private route: ActivatedRoute,
    private aimodelService:AimodelService,
    private router:Router) {
   }

  ngOnInit() {
    this.modelList=this.aimodelService.models;
    this.model$ = this.route.paramMap.pipe(
      map((params: ParamMap) =>{
        return params.get('modelId')
        })
      );
    
    this.model$.subscribe(modelId=>{
        this.modelList.forEach(model=>{
          if (Number(model['id'])===Number(modelId)){
            this.selectedModel=model;
            console.log()
          }
        });
      });

    var parameters = JSON.parse(this.selectedModel['parameter']);
    console.log(parameters);
    var parameters1 = this.jsontemplate1.parameter;
    this.jsontemplate = this.selectedModel;
    var jsonParameter = {};
    var paraNamePair = {};
    var enumPair ={};
    var outputPair = {}

    parameters1.forEach(function(entry){
      if(entry.parameter_type == 'input'){
        paraNamePair[entry.display_name] = entry.name;
        if(entry.value_type == 'numeric'){
          var type = {"type": "number"};
        }else{
          var type = {"type": "string"};
        }
        jsonParameter[entry.display_name] = type;
        if(entry['value_type'] == "categorical"){
          jsonParameter[entry.display_name].enum = entry['display_range'];
          var temp = {};
          for(let index in entry.display_range){
          	temp[entry.display_range[index]] = entry.value_range[index];
          }
          enumPair[entry.display_name] = temp;
        }
      }
      if(entry.parameter_type == 'output'){
      	outputPair[entry.name] = entry.display_name;
      }
    })
    this.paraNamePair = paraNamePair;
    this.enumPair = enumPair;
    this.outputPair = outputPair;
    //this.jsonSchema = jsonParameter;
    console.log(typeof(jsonParameter));
    this.jsonSchema = jsonParameter;
    console.log(this.jsonSchema);
    
  }

  showAiResult()
  {
    this.isAiResultHidden=false;
    var model_url = this.jsontemplate['url'];
    var dataReceived = this.submittedData;
    var paraNameMap = this.paraNamePair;
    var enumMap = this.enumPair;
    var outputMap = this.outputPair;
    var dataTobeSent = {};
    Object.keys(dataReceived).forEach(function(key) {
      dataTobeSent[paraNameMap[key]] = dataReceived[key];
      if(key in enumMap){
        dataTobeSent[paraNameMap[key]] = enumMap[key][dataReceived[key]];
      }
    })
    console.log(dataTobeSent);
    var output=[]
    $.ajax({
          url: model_url,
          type:'POST',
          contentType: "application/json",
          dataType:'json',
          data: JSON.stringify(dataTobeSent),
          success:  function(data){
            for(let key in data){
            	let temp = {};
            	temp["parameter"] = outputMap[key];
            	temp["value"] = data[key];
            	output.push(temp);
            }
          },
          error:function(err){
            console.log(err)
          }
    });

    this.resultSchema = output;
  }

}
