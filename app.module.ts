import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToasterServiceService } from './toaster-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { CscService } from './shared/csc.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerComponent } from './spinner/spinner.component';
import { HomeComponent } from './home/home.component';
import { ItemsProComponent } from './items-pro/items-pro.component';
import { CountryComponent } from './country/country.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'itemcom',
    component: ItemsProComponent
  },
  {
    path: 'country',
    component:CountryComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'customer-list',
    component: CustomerListComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CustomerComponent,
    CustomerListComponent,
    SpinnerComponent,
    HomeComponent,
    ItemsProComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [ ToasterServiceService, CscService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
