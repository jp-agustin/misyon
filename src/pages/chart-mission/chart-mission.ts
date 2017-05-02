import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Component, ViewChild } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-chart-mission',
  templateUrl: 'chart-mission.html',
})
export class ChartMission {

  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ["Dental", "General", "Surgical", "Emergency Relief"],
                datasets: [{
                    label: '# of Missions',
                    data: [4, 5, 3, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
//                        'rgba(153, 102, 255, 0.2)',
//                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#4BC0C0",
//                        "#36A2EB",
//                        "#FFCE56"
                    ]
                }]
            }

        });
    }

}
