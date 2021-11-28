import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BarChartComponent } from './bar-chart.component';
import { BarChartService } from './../../services/bar-chart.service';
import { BarChart } from '../../models/bar-chart.model';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

const mockData: BarChart[] = [
  { date: '2018-07-01', value: 244422.258 },
  { date: '2018-08-01', value: 244422.258, color: 'blue' },
  { date: '2018-09-01', value: 244422.258 },
];

@Component({
  selector: 'd3-bar-chart',
  template: '<div></div>',
})
class MockD3BarChartComponent {
  @Input() barChart: BarChart;
  @Output() barDetails = new EventEmitter<BarChart>();
}

class MockBarChartService {
  getChartData() {
    return of(mockData);
  }
}

describe('BarChartComponent', () => {
  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;
  let mockBarChartService: BarChartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarChartComponent, MockD3BarChartComponent],
      providers: [
        {
          provide: BarChartService,
          useClass: MockBarChartService,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockBarChartService = TestBed.inject(BarChartService);
    spyOn(mockBarChartService, 'getChartData').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get bar chart data', () => {
    component.ngOnInit();
    expect(mockBarChartService.getChartData).toHaveBeenCalled();
    component.data$
      .subscribe((result) => expect(result.length).toEqual(mockData.length))
      .unsubscribe();
  });
});
