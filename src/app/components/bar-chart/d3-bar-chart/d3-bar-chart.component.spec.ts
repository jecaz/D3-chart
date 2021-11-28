import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3BarChartComponent } from './d3-bar-chart.component';

const mockData = [
  { date: '2018-07-01', value: 244422.258 },
  { date: '2018-08-01', value: 244422.258, color: 'blue' },
  { date: '2018-09-01', value: 244422.258 },
];

describe('D3BarChartComponent', () => {
  let component: D3BarChartComponent;
  let fixture: ComponentFixture<D3BarChartComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [D3BarChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3BarChartComponent);
    component = fixture.componentInstance;
    component.barChart = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
