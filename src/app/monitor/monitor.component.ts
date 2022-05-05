import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  @Input() monitor: any;

  constructor() {

  }

  ngOnInit(): void {
  }

}
