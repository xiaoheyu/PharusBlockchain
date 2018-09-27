import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup,FormArray,Validators} from '@angular/forms'
import {AimodelService} from '../aimodel.service';
import {Parameter,ModelCategory} from '../model-data-model';
@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AddModelComponent implements OnInit {
  modelCategories:ModelCategory[];
  modelForm : FormGroup;
  // parameterGroup:FormGroup[]=[];
  constructor(public fb: FormBuilder,
              private aimodelService:AimodelService){
              }
// TODO: remove value_range field when the parameter_type is "output"
// https://stackoverflow.com/questions/44898010/form-control-valuechanges-gives-the-previous-value
// this.parentForm.controls['question1'].valueChanges.subscribe(
//   (selectedValue) => {
//     console.log(selectedValue);
//     console.log(this.parentForm.value.question1);     
//   }
// );
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
      parameter:this.fb.array([this.fb.group(new Parameter)]),
      category:'',
      subcategory:''
    }
  );
  this.disableValueRange();
  }

  //Formcontrol getters
  get controls() {return this.modelForm.controls;};
  get parameter(){return this.controls.parameter as FormArray;};

  //add a new parameter 
  addParameter(){
    //debug
    this.parameter.push(this.fb.group(
      new Parameter
    ));
    // listen for changes
    // this.parameterGroup.push(this.parameter.at(this.parameter.length-1) as FormGroup);
    // 
    this.disableValueRange();
  }

  //reset all parameters
  resetParameter(){
    //debug
    console.log('reset!');
    this.parameter.reset([]);
  }

  //remove all parameters
  removeAllParameters(){
    while (this.parameter.length !== 0) {
      this.parameter.removeAt(0)
    }
  }

  submitModel()
  {
    //transfer parameter array into a single string; Temporary solution for the 
    //database problem
    // this.modelForm.value.parameter=JSON.stringify(this.modelForm.value.parameter);
    // console.log(this.modelForm.value);
    this.aimodelService.addModel(this.modelForm.value)
    .subscribe(model=>console.log(JSON.stringify(model)));
  }

//listen for newly added 'parameter_type' field, and disable the 'value_range' input field when the value of parameter_type is 'output'
  disableValueRange(){
// don't invoke disable() inside its own value changes subscription. Because this will make a recursive call and give the
// "maximum call stack size exceeded" error
// listen for the valuechange at the deepest depth!
    let newPara=(this.parameter.at(this.parameter.length-1) as FormGroup).get('parameter_type');
    newPara.valueChanges
    .subscribe(para=>{
      if (para==='output'){
        newPara.parent.get('value_range').disable();
      }
      else if (para==='input'){
        newPara.parent.get('value_range').enable();
      }
    });
  }
}
