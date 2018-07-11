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
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { EdiIntroComponent } from './edi-intro/edi-intro.component';
import { Edi2Component } from './edi2/edi2.component';

const appRoutes: Routes = [
  { path: 'edi-form', component: EDIComponent },
  { path: 'edi-form2', component: Edi2Component }
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
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
