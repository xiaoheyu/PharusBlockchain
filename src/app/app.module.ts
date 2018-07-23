import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,

  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,

  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,

  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
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
import { Service3Component } from './service3/service3.component';
import { Service3Model1FormComponent } from './service3-model1-form/service3-model1-form.component';
import { Service3Model2FormComponent } from './service3-model2-form/service3-model2-form.component';
import { Service4Component } from './service4/service4.component';
import { Service4Model1FormComponent } from './service4-model1-form/service4-model1-form.component';
import { Service4Model2FormComponent } from './service4-model2-form/service4-model2-form.component';
import { Service5Component } from './service5/service5.component';
import { Service5Model1FormComponent } from './service5-model1-form/service5-model1-form.component';
import { Service5Model2FormComponent } from './service5-model2-form/service5-model2-form.component';
import {CdkTableModule} from '@angular/cdk/table';

const appRoutes: Routes = [
  {
  path:'account',
  component:UseraccountComponent,
  outlet:'menu'
  },

  {
  path:'service1',
  component:Service1Component,
  outlet:'menu',
  children:[
    {
      path: 'compose',
      component: Service1Model1FormComponent,
      outlet: 'popup'
    },
    {
      path: 'compose2',
      component: Service1Model2FormComponent,
      outlet: 'popup'
    }
  ]
  },

  {
  path:'service2',
  component:Service2Component,
  outlet:'menu',
  children:[
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
  ]
  },

  {
  path:'service3',
  component:Service3Component,
  outlet:'menu',
  children:[
    {
      path: 'compose5',
      component: Service3Model1FormComponent,
      outlet: 'popup3'
    },
    {
      path: 'compose6',
      component: Service3Model2FormComponent,
      outlet: 'popup3'
    }
  ]
  },

  {
  path:'service4',
  component:Service4Component,
  outlet:'menu',
  children:[
    {
      path: 'compose7',
      component: Service4Model1FormComponent,
      outlet: 'popup4'
    },
    {
      path: 'compose8',
      component: Service4Model2FormComponent,
      outlet: 'popup4'
    }
  ]
  },

  {
  path:'service5',
  component:Service5Component,
  outlet:'menu',
  children:[
    {
      path: 'compose9',
      component: Service5Model1FormComponent,
      outlet: 'popup5'
    },
    {
      path: 'compose10',
      component: Service5Model2FormComponent,
      outlet: 'popup5'
    }
  ]
  },
  
  {
  path:'EDIintro',
  component:EdiIntroComponent,
  outlet:'menu',
  children:[
  { 
    path: 'edi-form', 
    component: EDIComponent,
    outlet:'edi'
   },
  { 
    path: 'edi-form2', 
    component: Edi2Component,
    outlet:'edi'
  },
  ]
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
    Service3Component,
    Service3Model1FormComponent,
    Service3Model2FormComponent,
    Service4Component,
    Service4Model1FormComponent,
    Service4Model2FormComponent,
    Service5Component,
    Service5Model1FormComponent,
    Service5Model2FormComponent
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
    MatSelectModule,
    MatNativeDateModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule

  ],
  schemas:[ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class AppModule { }
