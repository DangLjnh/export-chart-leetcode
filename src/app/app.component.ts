import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';
import { ChartService } from './chart.service';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  countriesData = [];
  totalDeath: (number | [number, number] | null)[] = [];
  totalConfirm: (number | [number, number] | null)[] = [];
  totalCountry: string[] = [];
  totalColumns = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  currentTotalColumn = 5;
  barChartData!: ChartData<'bar'>;

  public barChartLegend = true;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  barChartPlugins = [DataLabelsPlugin];

  constructor(private chartService: ChartService) {}
  ngOnInit(): void {
    this.chartService.getSummary().subscribe((val: any) => {
      val.Countries.slice(0, this.currentTotalColumn).map((item: any) => {
        this.totalDeath.push(item.TotalDeaths);
        this.totalCountry.push(item.Country);
        this.totalConfirm.push(item.TotalConfirmed);
      });
      this.barChartData = {
        labels: this.totalCountry,
        datasets: [
          {
            data: this.totalDeath,
            label: 'Total Deaths',
          },
          {
            data: this.totalConfirm,
            label: 'Total Confirmed',
            backgroundColor: 'rgba(255, 255, 0, 0.5)',
          },
          {
            data: this.totalConfirm,
            label: 'Total Confirmed',
          },
        ],
      };
    });
  }
}
