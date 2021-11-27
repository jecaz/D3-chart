import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { BarChart } from 'src/app/models/bar-chart.model';

@Component({
  selector: 'd3-bar-chart-details',
  templateUrl: './d3-bar-chart-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class D3BarChartDetailsComponent implements OnInit {
  @Input() barDetails: BarChart;

  constructor() {}

  ngOnInit(): void {}
}
