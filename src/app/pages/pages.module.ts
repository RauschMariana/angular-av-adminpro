import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graph1Component } from './graph1/graph1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    DashboardComponent,
    Graph1Component,
    ProgressComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
  exports: [
    DashboardComponent,
    Graph1Component,
    ProgressComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
