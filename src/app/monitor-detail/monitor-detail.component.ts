import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonitorDataService } from '../monitor-data.service';

@Component({
  selector: 'app-monitor-detail',
  templateUrl: './monitor-detail.component.html',
  styleUrls: ['./monitor-detail.component.css']
})
export class MonitorDetailComponent implements OnInit {

  public monitor: any;

  constructor(private route: ActivatedRoute, private monitorService: MonitorDataService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.monitorService.getMonitor$(id).subscribe(item => (this.monitor = item.data));
  }

}
