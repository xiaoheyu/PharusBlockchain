import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule,MatButtonModule,MatMenuModule,MatNativeDateModule,MatIconModule, MatDialogModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {OverlayContainer} from '@angular/cdk/overlay';


import { AppComponent } from './app.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { Service1Component } from './service1/service1.component';
import { EDIComponent } from './edi/edi.component';
import { EdiIntroComponent } from './edi-intro/edi-intro.component';
import { Edi2Component } from './edi2/edi2.component';
import {MatSelectModule} from '@angular/material/select';
import { AddModelComponent } from './forms/add-model/add-model.component';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseModelComponent } from './forms/purchase-model/purchase-model.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  {
    path:'',
    redirectTo:'/account',
    pathMatch:'full'
  },
  {
  path:'account',
  component:UseraccountComponent
  },

  {
  path:':abbr',
  component:Service1Component
  },

  
  
  
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    UseraccountComponent,
    Service1Component,
    EDIComponent,
    EdiIntroComponent,
    Edi2Component,
    AddModelComponent,
    PurchaseModelComponent,
    TopnavbarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,onSameUrlNavigation	:'reload' } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    RouterModule,
    MatSelectModule,
    MatNativeDateModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    HttpClientModule

  ],
  schemas:[ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddModelComponent]
})
export class AppModule 
{
  constructor(overlayContainer:OverlayContainer)
  {
    overlayContainer.getContainerElement().classList.add('menu-theme');
  }
}
