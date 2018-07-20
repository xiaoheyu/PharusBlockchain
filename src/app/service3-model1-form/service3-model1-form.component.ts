import { Component, OnInit,AfterViewChecked,ViewEncapsulation } from '@angular/core';
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

  //binding variables
  selectedAccount: string;

  //this is used to control how many times the function inside ngAfterViewChecked() will be run
  private serviceOneCount:number;
  public modelOnePrice:number;
  
  test:any[];
  //Handler function for ajax
  successAjax(data){
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
    //submit form using ajax
    $('#purchase').submit(function(event){
      event.preventDefault();
      var $form=$(this),
      url=$form.attr('action');
      this.modelOnePrice=15;
      
      var posting =$.get(url,{address_a:$('#accountSelect').val(), trans_value:this.modelOnePrice*Math.pow(10,18)});
      posting.done(function(data){
        this.modelOnePrice=15;
        $("option").remove();
        $.ajax({
          url:'http://18.236.104.52:8080/accounts',
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

        $('#modelMessage').text(data);
        $('ol').prepend('<li><a class="list-group-item">\n<div class=\"bmd-list-group-col\">'+'<p class=\"list-group-item-heading\"> Transaction Address:<br>'+data+'</p>'+'</div></a></li>');
      });
    });

    //functionalities for 'Clean History'
    $('#cleanHistory').click(()=>{
      $("li").remove();
    });
  };


  ngAfterViewChecked(){
	  if ($('#serviceThreeContainer').length===1){
		  this.serviceOneCount++;
		  //run only when service 1 is truly rendered
		  if(this.serviceOneCount===1){
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
		  this.serviceOneCount=0;
	  }
  }
  
  onSubmit(form){
    alert(form.value);
    
  }
  constructor() {
    this.serviceOneCount=0;
    this.modelOnePrice=15;
    this.test=[1,2,3,4,5]
   }

  ngOnInit() {
    
  }

}
