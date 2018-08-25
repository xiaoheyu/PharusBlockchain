import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl,FormArray} from '@angular/forms'

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss']
})
export class AddModelComponent implements OnInit {
 
  modelform: FormGroup;

  constructor(private fb: FormBuilder) { }

  title=new FormControl('');
  description=new FormControl('');
  ngOnInit() {
    this.modelform = this.fb.group({
      title: this.title,
      description: this.description
    })

    this.modelform.valueChanges.subscribe(console.log)
  }

}
