import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LandingPage1Component } from './landing-page1/landing-page1.component';
import { LandingPage2Component } from './landing-page2/landing-page2.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule } from '@angular/material/table';
import {FormsModule}  from '@angular/forms';
import { SuccessPageComponent } from './success-page/success-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LandingPage1Component,
    LandingPage2Component,
    ViewPageComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
