import { Component, OnInit } from '@angular/core';
import { Ediform }    from '../ediform';
@Component({
  selector: 'app-edi2',
  templateUrl: './edi2.component.html',
  styleUrls: ['./edi2.component.scss']
})
export class Edi2Component implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Ediform(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
 
  onSubmit() { this.submitted = true; }
 
  newHero() {
    this.model = new Ediform(42, '', '');
  }
  constructor() { }

  ngOnInit() {
  }

}
