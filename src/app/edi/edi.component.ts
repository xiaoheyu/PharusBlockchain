import { Component, OnInit } from '@angular/core';
import { Ediform }    from '../ediform';
 
@Component({
  selector: 'app-edi',
  templateUrl: './edi.component.html',
  styleUrls: ['./edi.component.scss']
})
export class EDIComponent implements OnInit {
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
 
  