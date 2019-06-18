import { Component } from '@angular/core';
import Chart from 'chart.js';
import { TwitterSerivice } from '../../services/twitter.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data: string;
  duqueTotal: number;
  gustavoTotal: number;
  fajardoTotal: number;
  germnanTotal: number;
  constructor(private messageTwitter: TwitterSerivice){}

  useAnotherOneWithWebpack(msg) {
    this.duqueTotal = msg.calculate['@IvanDuque'].positivo +
                      msg.calculate['@IvanDuque'].negativo +
                      msg.calculate['@IvanDuque'].neutro ;
    this.gustavoTotal = msg.calculate['@petrogustavo'].positivo +
                        msg.calculate['@petrogustavo'].negativo +
                        msg.calculate['@petrogustavo'].neutro ;
    this.fajardoTotal = msg.calculate['@sergio_fajardo'].positivo +
                        msg.calculate['@sergio_fajardo'].negativo +
                        msg.calculate['@sergio_fajardo'].neutro ;
    this.germnanTotal = msg.calculate['@German_Vargas'].positivo +
                        msg.calculate['@German_Vargas'].negativo +
                        msg.calculate['@German_Vargas'].neutro ;
    var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['Ivan Duque', 'Gustavo Petro', 'Sergio Fajardo', 'German Vargas'],
            datasets: [{
              label: 'Positivo',
              backgroundColor:
                'rgba(0, 129, 60, 0.2)',
              borderColor:
                'rgba(0, 129, 60, 1)',
              data: [(msg.calculate['@IvanDuque'].positivo * 100) / (this.duqueTotal),
              (msg.calculate['@petrogustavo'].positivo * 100) / (this.gustavoTotal),
              (msg.calculate['@sergio_fajardo'].positivo * 100) / (this.fajardoTotal),
              (msg.calculate['@German_Vargas'].positivo * 100) / (this.germnanTotal)],
              borderWidth: 1
            },
            {
              label: 'Negativo',
              backgroundColor:
                'rgba(200, 0, 21, 0.2)',
              borderColor:
                'rgba(200, 0, 21, 1)',
              data: [(msg.calculate['@IvanDuque'].negativo * 100) / ( this.duqueTotal ),
              ( msg.calculate['@petrogustavo'].negativo * 100) / (this.gustavoTotal),
              ( msg.calculate['@sergio_fajardo'].negativo * 100 ) / (this.fajardoTotal),
              ( msg.calculate['@German_Vargas'].negativo * 100) / ( this.germnanTotal )],
              borderWidth: 1
            },
            {
              label: 'Neutro',
              backgroundColor:
                'rgba(87, 35, 100, 0.2)',
              borderColor: 
                'rgba(87, 35, 100, 1)',
              data: [(msg.calculate['@IvanDuque'].neutro * 100) / ( this.duqueTotal ),
              ( msg.calculate['@petrogustavo'].neutro * 100) / (this.gustavoTotal),
              ( msg.calculate['@sergio_fajardo'].neutro * 100 ) / (this.fajardoTotal),
              ( msg.calculate['@German_Vargas'].neutro * 100) / ( this.germnanTotal )],
              borderWidth: 1
            },
          ]
       }
    });
  }

  chartk(msg) {
    var ctx = (<any>document.getElementById('pro-chart')).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['Ivan Duque', 'Gustavo Petro', 'Sergio Fajardo', 'German Vargas'],
            datasets: [{
              label: 'Positivo',
              backgroundColor:
                'rgba(0, 129, 60, 0.2)',
              borderColor:
                'rgba(0, 129, 60, 1)',
              data: [msg.calculate['@IvanDuque'].positivo ,
              msg.calculate['@petrogustavo'].positivo,
              msg.calculate['@sergio_fajardo'].positivo,
              msg.calculate['@German_Vargas'].positivo],
              borderWidth: 1
            },
            {
              label: 'Negativo',
              backgroundColor:
                'rgba(200, 0, 21, 0.2)',
              borderColor:
                'rgba(200, 0, 21, 1)',
              data: [msg.calculate['@IvanDuque'].negativo,
               msg.calculate['@petrogustavo'].negativo,
               msg.calculate['@sergio_fajardo'].negativo,
               msg.calculate['@German_Vargas'].negativo],
              borderWidth: 1
            },
            {
              label: 'Neutro',
              backgroundColor:
                'rgba(87, 35, 100, 0.2)',
              borderColor:
                'rgba(87, 35, 100, 1)',
                data: [msg.calculate['@IvanDuque'].neutro,
                msg.calculate['@petrogustavo'].neutro,
                msg.calculate['@sergio_fajardo'].neutro,
                msg.calculate['@German_Vargas'].neutro],
              borderWidth: 1
            },
          ]
       }
    });
  }

  ngOnInit() {
    this.messageTwitter.messages.subscribe(msg => {
      console.log('Petro +',msg.calculate['@petrogustavo'].positivo);
      console.log('Petro -',msg.calculate['@petrogustavo'].negativo);
      console.log('Petro -/+',msg.calculate['@petrogustavo'].neutro);
      console.log('Duque +',msg.calculate['@IvanDuque'].positivo);
      console.log('Duque -',msg.calculate['@IvanDuque'].negativo);
      console.log('Duque -/+',msg.calculate['@IvanDuque'].neutro);
      this.useAnotherOneWithWebpack(msg);
      this.chartk(msg);
    });
  }

}
