import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonitorModule } from './monitor/monitor.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MonitorViewComponent } from './monitor-view/monitor-view.component';

const appRoutes: Routes = [
  { path: 'monitor/view', component: MonitorViewComponent },
  //{ path: 'monitor/detail/:id'},
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
