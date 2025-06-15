import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import chartDataLabels from 'chartjs-plugin-datalabels';
import '../../../dist/my-lit-lib/my-lit-lib.js';
import { Legend, plugins } from 'chart.js';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App {
  type = 'bar';
  datalabels = [chartDataLabels];
  labels = ['Category 1', 'Category 2', 'Category 3'];

  data = {
    labels: this.labels,
    datasets: [
      {
        label: 'temperature',
        data: [35, 30, 25],
        backgroundColor: '#0066FF',
        borderRadius: 20,
        pointStyle: 'circle',
      },
      {
        label: 'pressure',
        data: [30, 22, 15],
        backgroundColor: '#1ac69e',
        borderRadius: 20,
        pointStyle: 'circle',
      },
      {
        label: 'wind',
        data: [34, 22, 25],
        backgroundColor: '#2708a2',
        borderRadius: 20,
        pointStyle: 'circle',
      },
      {
        label: 'humidity',
        data: [36, 15, 37],
        backgroundColor: '#0046b0',
        borderRadius: 20,
        pointStyle: 'circle',
      },
      {
        label: 'precipitation',
        data: [34, 22, 27],
        backgroundColor: '#078878',
        borderRadius: 20,
        pointStyle: 'circle',
      },
      {
        label: 'precipitation',
        data: [36, 10, 30],
        backgroundColor: '#2708a2',
        borderRadius: 20,
        pointStyle: 'circle',
      },
    ],
  };

  options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
        title: {
          display: true,
          text: 'legend',
        },
        position: 'right',
      },
      tooltip: {
        usePointStyle: true,
      },
      datalabels: {
        color: '#000',
        anchor: 'end',
        align: 'top',
        offset: 4,
        font: {
          weight: 'bold',
          size: 12,
        },
        formatter: (value: any) => {
          return value;
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'categories',
          font: {
            size: 14,
            weight: 'bold',
          },
          padding: {
            top: 10,
          },
        },
      },
      y: {
        beginAtZero : true,
        title : {
          display : true,
          text: 'Fuel Burned (Gal)',
          font : {
            size: 14,
            weight: 'bold'
          }
        }
      }
    },
  };
}
