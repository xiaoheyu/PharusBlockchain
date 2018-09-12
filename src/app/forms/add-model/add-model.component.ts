import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup,FormArray,Validators} from '@angular/forms'
import {AimodelService} from '../aimodel.service';
import {Parameter,url,ModelCategory} from '../model-data-model';
@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AddModelComponent implements OnInit {
  modelCategories:ModelCategory[];
  modelForm : FormGroup;

  constructor(public fb: FormBuilder,
              private aimodelService:AimodelService
              ){
  
  }

  ngOnInit()
  {
    // load model category list
    this.aimodelService.getCategories().subscribe(
      modelcategories=>this.modelCategories=modelcategories
    )
    console.log(this.modelCategories);
    
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
    //transfer parameter array into a single string; Temporary solution for the 
    //database problem
    this.modelForm.value.parameter=JSON.stringify(this.modelForm.value.parameter);
    console.log(this.modelForm.value);
    this.aimodelService.addModel(this.modelForm.value,url)
    .subscribe(model=>console.log(JSON.stringify(model)));
  }


}
