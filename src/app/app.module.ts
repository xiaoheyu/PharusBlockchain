import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material';
import { AppComponent } from './app.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { EDIComponent } from './edi/edi.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { EdiIntroComponent } from './edi-intro/edi-intro.component';
import { Edi2Component } from './edi2/edi2.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Service1Model1FormComponent } from './service1-model1-form/service1-model1-form.component';
import {MatSelectModule} from '@angular/material/select';
import { Service1Model2FormComponent } from './service1-model2-form/service1-model2-form.component';
import { Service2Model1FormComponent } from './service2-model1-form/service2-model1-form.component';
import { Service2Model2FormComponent } from './service2-model2-form/service2-model2-form.component';

const appRoutes: Routes = [
  { path: 'edi-form', component: EDIComponent },
  { path: 'edi-form2', component: Edi2Component },
  {
    path: 'compose',
    component: Service1Model1FormComponent,
    outlet: 'popup'
  },
  {
    path: 'compose2',
    component: Service1Model2FormComponent,
    outlet: 'popup'
  },
  {
    path: 'compose3',
    component: Service2Model1FormComponent,
    outlet: 'popup2'
  },
  {
    path: 'compose4',
    component: Service2Model2FormComponent,
    outlet: 'popup2'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UseraccountComponent,
    Service1Component,
    Service2Component,
    EDIComponent,
    EdiIntroComponent,
    Edi2Component,
    Service1Model1FormComponent,
    Service1Model2FormComponent,
    Service2Model1FormComponent,
    Service2Model2FormComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true,onSameUrlNavigation	:'ignore' } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    RouterModule,
    MatSelectModule

  ],
  schemas:[ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
