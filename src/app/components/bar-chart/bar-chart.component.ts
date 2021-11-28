import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BarChartService } from 'src/app/services/bar-chart.service';
import { Observable } from 'rxjs';
import { BarChart } from 'src/app/models/bar-chart.model';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./../../../styles/bar-chart/bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartComponent implements OnInit {
  data$: Observable<BarChart[]>;
  barDetails: BarChart;

  constructor(protected barChartService: BarChartService) {}

  ngOnInit(): void {
    this.data$ = this.barChartService.getChartData();
  }
}
