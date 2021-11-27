import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarCharService } from 'src/app/services/bar-chart.service';
import { D3BadgeModule } from './d3-bar-chart/d3-bar-char.module';
import { BarChartComponent } from './bar-chart.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: BarChartComponent,
  },
];

@NgModule({
  declarations: [BarChartComponent],
  imports: [CommonModule, RouterModule.forChild(routes), D3BadgeModule],
  providers: [BarCharService],
  exports: [BarChartComponent, RouterModule],
})
export class BarChartModule {}