import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartService } from 'src/app/services/bar-chart.service';
import { D3BadgeModule } from './d3-bar-chart/d3-bar-char.module';
import { BarChartComponent } from './bar-chart.component';
import { CommonModule } from '@angular/common';
import { D3BarChartDetailsComponent } from './d3-bar-chart-details/d3-bar-chart-details.component';

const routes: Routes = [
  {
    path: '',
    component: BarChartComponent,
  },
];

@NgModule({
  declarations: [BarChartComponent, D3BarChartDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), D3BadgeModule],
  providers: [BarChartService],
  exports: [BarChartComponent, RouterModule],
})
export class BarChartModule {}
