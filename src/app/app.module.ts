import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { D3BarChartDetailsComponent } from './components/bar-chart/d3-bar-chart-details/d3-bar-chart-details.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
