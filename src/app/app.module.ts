import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material';
import { AppComponent } from './app.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { EDIComponent } from './edi/edi.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UseraccountComponent,
    Service1Component,
    Service2Component,
    EDIComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
