import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3BarChartDetailsComponent } from './d3-bar-chart-details.component';

describe('D3BarChartDetailsComponent', () => {
  let component: D3BarChartDetailsComponent;
  let fixture: ComponentFixture<D3BarChartDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3BarChartDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3BarChartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
