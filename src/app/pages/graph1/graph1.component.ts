import { Component, Input } from '@angular/core';




@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component {

  public labels1: string[] = [ 'Pan', 'Refresco', 'Tacos' ];
  public data1 = {
    labels: this.labels1,
    datasets: [
      { 
        data: [10, 15, 40], 
        backgroundColor: ['#6857E6', '#009FEE', '#F02059']
      }
    ],
  };
  
}
