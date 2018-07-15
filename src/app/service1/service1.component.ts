import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.scss'],
//   encapsulation: ViewEncapsulation.None
})
export class Service1Component implements OnInit {

  constructor() { }

  public ngOnInit(){

//   $("document").ready(function(){
	//hard-coded model price
    const modelOnePrice=10000000000000;
    $.ajax({
		url:'http://18.236.104.52:8080/accounts',
		type:'GET',
		dataType:'json',
		success:function(data){
			//rule out accounts with insufficient balance for a specified model
			let modelOneList=data.account_list.filter(data=>data.balance>=modelOnePrice);
			for (let i of modelOneList){
				$('select').append('<option value='+i.account+'>'+'Account address: '+i.account+' || Balance: '+i.balance+'</option>');
				};
			//submit form using ajax
			$('#purchase').submit(function(event){
				event.preventDefault();
				var $form=$(this),
				url=$form.attr('action');
				var posting =$.get(url,{address_a:$('#accountSelect').val(), trans_value:modelOnePrice});
				posting.done(function(data){
					$('#modelMessage').text(data);
					$('ol').append('<li><a class="list-group-item">\n<div class=\"bmd-list-group-col\">'+'<p class=\"list-group-item-heading\">'+data+'</p>'+'<p class=\"list-group-item-text\">'+modelOnePrice+'</p></div></a></li>');
				});
			});

			//functionalities for 'Clean History'
			$('#cleanHistory').click(()=>{
				$("li").remove();
			});
			//functionalities for 'Refresh the list' button
			$('#refreshList').click(()=>{
				$("option").remove();
				$.ajax({
					url:'http://18.236.104.52:8080/accounts',
					type:'GET',
					dataType:'json',
					success:function(data)
					{

						$('select').append('<option selected value=\'\'>Your available accounts for MODEL 1</option>');
						let modelOneList=data.account_list.filter(data=>data.balance>=modelOnePrice);
						for (let i of modelOneList){
							$('select').append('<option value='+i.account+'>'+'Account address: '+i.account+' Balance: '+i.balance+'</option>');
						};
					}

				});
			});
			


		},
		error:function(){
			alert('error reading accounts!');
		}
  });
  
// });



  };

}
