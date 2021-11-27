import { NgModule } from '@angular/core';
import { BarCharService } from 'src/app/services/bar-chart.service';
import { D3BarChartComponent } from './d3-bar-chart.component';

@NgModule({
  declarations: [D3BarChartComponent],
  providers: [BarCharService],
  exports: [D3BarChartComponent],
})
export class D3BadgeModule {}
