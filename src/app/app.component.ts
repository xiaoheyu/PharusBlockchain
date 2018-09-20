import { Component,ViewEncapsulation,OnInit  } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  ngOnInit()
  {
    // initialize receipts property in localStorage
    localStorage.setItem('receipts','[]');
  }
}
