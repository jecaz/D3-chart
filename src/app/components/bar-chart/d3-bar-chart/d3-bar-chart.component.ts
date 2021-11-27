import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BarChart } from 'src/app/models/bar-chart.model';
import * as d3 from 'd3';

@Component({
  selector: 'd3-bar-chart',
  templateUrl: './d3-bar-chart.component.html',
  styleUrls: ['./../../../../styles/d3-bar-chart/d3-bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class D3BarChartComponent implements OnInit {
  @Input() barChart: BarChart[];
  @Output() barDetails = new EventEmitter<BarChart>();
  protected svg;
  protected margin = 50;
  protected width = 750 - this.margin * 2;
  protected height = 450 - this.margin * 2;
  defaultColor = 'royalblue';

  constructor() {}

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.barChart);
  }

  protected createSvg(): void {
    this.svg = d3
      .select('figure#bar')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  protected drawBars(data: BarChart[]): void {
    const xAxis = this.getXaxis(data);
    const yAxis = this.getYaxis(data);

    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xAxis(d.date))
      .attr('y', (d) => yAxis(d.value))
      // .style('cursor', 'pointer')
      .on('click', (event, data) => {
        if (!data.color) {
          data.color = this.defaultColor;
        }
        this.barDetails.emit(data);
      })
      .attr('width', xAxis.bandwidth())
      .attr('height', (d) => this.height - yAxis(d.value))
      .attr('fill', (d) => (d.color ? d.color : this.defaultColor));
  }

  protected getXaxis(data: BarChart[]) {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.date))
      .range([0, this.width])
      .padding(0.3);

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-35)')
      .style('text-anchor', 'end');

    // Add a label for the X-axis
    this.svg
      .append('text')
      .attr(
        'transform',
        'translate(' + (this.width + 5 + ' ,') + (this.height + 30) + ')'
      )
      .text('Date');
    return x;
  }

  protected getYaxis(data: BarChart[]) {
    // Create the Y-axis band scale
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g').call(d3.axisLeft(y));

    // Add a label for the Y-axis
    this.svg
      .append('text')
      .attr('transform', 'translate(-30,-10)')
      .style('text-anchor', 'middle')
      .text('Value');
    return y;
  }

  protected createAndFillChart(data: BarChart[], xAxis, yAxis) {
    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xAxis(d.date))
      .attr('y', (d) => yAxis(d.value))
      // .style('cursor', 'pointer')
      .on('click', (event, data) => this.barDetails.emit(data))
      .attr('width', xAxis.bandwidth())
      .attr('height', (d) => this.height - yAxis(d.value))
      .attr('fill', (d) => (d.color ? d.color : this.defaultColor));
  }
}
