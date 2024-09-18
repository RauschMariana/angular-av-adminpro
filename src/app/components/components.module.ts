import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BaseChartDirective } from 'ng2-charts';

import { IncreaserComponent } from './increaser/increaser.component';
import { DoughnutComponent } from './doughnut/doughnut.component';



@NgModule({
  declarations: [ 
    IncreaserComponent,
    DoughnutComponent
  ],
  exports: [
    IncreaserComponent,
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaseChartDirective
  ]
})
export class ComponentsModule { }
