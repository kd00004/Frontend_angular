import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';

import { LandingPage1Component } from './landing-page1/landing-page1.component';

import { LandingPage2Component } from './landing-page2/landing-page2.component';

import { ViewPageComponent } from './view-page/view-page.component';
import { SuccessPageComponent } from './success-page/success-page.component';

// import { SubmissionSuccessComponent } from './submission-success/submission-success.component';




const routes: Routes = [

  { path: '', component: MainPageComponent },

  { path: 'landing-page1', component: LandingPage1Component },

  { path: 'landing-page2', component: LandingPage2Component },
  //{ path: 'view-page', component: ViewPageComponent}

  { path: 'landing-page2/:id', component: ViewPageComponent},

   { path: 'success-page', component: SuccessPageComponent}

];




@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }
