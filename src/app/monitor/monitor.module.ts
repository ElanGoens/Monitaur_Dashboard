import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorComponent } from './monitor.component';
import { MonitorViewComponent } from '../monitor-view/monitor-view.component';
import { RouterModule, Routes } from '@angular/router';
import { MonitorDetailComponent } from '../monitor-detail/monitor-detail.component';
import { MonitorAddEditComponent } from '../monitor-add-edit/monitor-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MonitorComponent, MonitorViewComponent, MonitorDetailComponent, MonitorAddEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [MonitorComponent, MonitorViewComponent, ReactiveFormsModule]
})
export class MonitorModule { }
