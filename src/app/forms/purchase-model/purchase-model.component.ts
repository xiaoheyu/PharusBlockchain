import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purchase-model',
  templateUrl: './purchase-model.component.html',
  styleUrls: ['./purchase-model.component.scss']
})
export class PurchaseModelComponent implements OnInit {
  @Input() chosenId:number;
  constructor() { }

  ngOnInit() {
  }

}
