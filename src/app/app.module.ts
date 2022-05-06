import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonitorModule } from './monitor/monitor.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MonitorViewComponent } from './monitor-view/monitor-view.component';
import { MonitorDetailComponent } from './monitor-detail/monitor-detail.component';
import { MonitorAddEditComponent } from './monitor-add-edit/monitor-add-edit.component';

const appRoutes: Routes = [
  { path: 'monitor/view', component: MonitorViewComponent },
  { path: 'monitor/detail/:id', component: MonitorDetailComponent},
  { path: 'monitor/add', component: MonitorAddEditComponent},
  { path: '', redirectTo: 'monitor/view', pathMatch: 'full' },
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MonitorModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
