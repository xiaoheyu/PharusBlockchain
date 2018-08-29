import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup, FormControl,FormArray,Validators} from '@angular/forms'
import {AimodelService} from '../aimodel.service';
import {AiModel,Parameter,url} from '../model-data-model';
@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AddModelComponent implements OnInit {
 
  modelForm : FormGroup;

  constructor(public fb: FormBuilder,
              private aimodelService:AimodelService
              ){
  
  }

  ngOnInit()
  {
    this.modelForm = this.fb.group(
      {
      title : ['',Validators.required],
      description :[ '',],
      price : ['',Validators.required],
      url:['',Validators.required],
      parameter:this.fb.array([]),
      category:'',
      subcategory:''
    }
    // new AiModel()
  );
  }

  //Formcontrol getters
  get controls() {return this.modelForm.controls;};
  get parameter(){return this.controls.parameter as FormArray;};

  //add a new parameter 
  addParameter()
  {
    //debug
    console.log('added!');
    this.parameter.push(this.fb.group(
      // {
      // name:'',
      // field:''
      // }
      new Parameter
    ));
  }

  //reset all parameters
  resetParameter()
  {
    //debug
    console.log('reset!');
    this.parameter.reset([]);
  }

  //remove all parameters
  removeAllParameters()
  {
    while (this.parameter.length !== 0) {
      this.parameter.removeAt(0)
    }
  }

  //TODO: send new model data via POST
  submitModel()
  {
    this.aimodelService.addModel(this.modelForm.value,url)
    .subscribe(model=>console.log(JSON.stringify(model)));
  }


}
