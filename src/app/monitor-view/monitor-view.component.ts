import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MonitorDataService } from '../monitor-data.service';
import { Monitor } from '../monitor/monitor.model';

@Component({
  selector: 'app-monitor-view',
  templateUrl: './monitor-view.component.html',
  styleUrls: ['./monitor-view.component.css']
})
export class MonitorViewComponent implements OnInit {

  public _monitors$: any;

  constructor(private _monitorService: MonitorDataService) {
    _monitorService.monitors$.subscribe(val => this._monitors$ = val.data);
  }

  ngOnInit(): void {
    //this._fetchMonitors$.subscribe(val => console.log(val));
  }

  get monitors$(): any {
    console.log(this._monitors$);
    return this._monitors$;
  }

}
