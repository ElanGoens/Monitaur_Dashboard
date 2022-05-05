import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorComponent } from './monitor.component';
import { MonitorViewComponent } from '../monitor-view/monitor-view.component';


@NgModule({
  declarations: [MonitorComponent, MonitorViewComponent],
  imports: [
    CommonModule
  ],
  exports: [MonitorComponent, MonitorViewComponent]
})
export class MonitorModule { }
