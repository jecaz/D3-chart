import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BarChart } from '../models/bar-chart.model';

const DATA: BarChart[] = [
  { date: '2018-01-01', value: 270770.647, color: 'orangered' },
  { date: '2018-02-01', value: 273220.32 },
  { date: '2018-03-01', value: 253580.124 },
  { date: '2018-04-01', value: 254728.845 },
  { date: '2018-05-01', value: 244422.258 },
  { date: '2018-06-01', value: 244422.258 },
  { date: '2018-07-01', value: 244422.258 },
  { date: '2018-08-01', value: 244422.258, color: 'blue' },
  { date: '2018-09-01', value: 244422.258 },
  { date: '2018-10-01', value: 244422.258 },
  { date: '2018-11-01', value: 244422.258 },
  { date: '2018-12-01', value: 244422.258, color: 'green' },
];

@Injectable({
  providedIn: 'root',
})
export class BarChartService {
  constructor() {}

  getChartData(): Observable<BarChart[]> {
    return of(DATA);
  }
}
