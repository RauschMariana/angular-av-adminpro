import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html'
})
export class DoughnutComponent {

  @Input('title') title: string = 'Sin título';
  @Input('labels') doughnutChartLabels: string[] = ['Label 1', 'Label 2', 'Label 3'];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [350, 450, 100], 
        backgroundColor: ['#6857E6', '#009FEE', '#F02059']
      }
    ],
  };

  public chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
}
