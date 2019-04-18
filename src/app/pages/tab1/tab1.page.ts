import { Component } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  useAnotherOneWithWebpack() {
    var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'polarArea',

        // The data for our dataset
        data: {
            labels: ["Ivan Duque", "Gustavo Petro", "Sergio Fajardo", "German Vargas"],
            datasets: [{
              label: "Favorabilidad en Twitter",
              backgroundColor: [
                'rgba(26, 128, 182, 0.2)',
                'rgba(87, 35, 100, 0.2)',
                'rgba(0, 129, 60, 0.2)',
                'rgba(200, 0, 21, 0.2)',
              ],
              borderColor: [
                'rgba(26, 128, 182,1)',
                'rgba(87, 35, 100, 1)',
                'rgba(0, 129, 60, 1)',
                'rgba(200, 0, 21, 0.2)',
              ],
              data: [500, 150, 250, 300],
              borderWidth: 1
            }]
       }
    });
  }

  ngOnInit() {
    this.useAnotherOneWithWebpack();
  }

}
