import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsListingComponent } from './jobs-listing/jobs-listing.component';
import {HttpService} from "./http.service";
import {HttpClientModule} from "@angular/common/http";
import {JobsListingStandalone} from "./JobsListingStandalone/JobsListingStandalone";
import {SlavesListingComponent} from "./SlavesListing/slaves-listing.component";

@NgModule({
  declarations: [
    AppComponent,
    JobsListingComponent,
    JobsListingStandalone,
    SlavesListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
