import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorComponent } from './monitor.component';
import { MonitorViewComponent } from '../monitor-view/monitor-view.component';
import { RouterModule, Routes } from '@angular/router';
import { MonitorDetailComponent } from '../monitor-detail/monitor-detail.component';


@NgModule({
  declarations: [MonitorComponent, MonitorViewComponent, MonitorDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [MonitorComponent, MonitorViewComponent]
})
export class MonitorModule { }
