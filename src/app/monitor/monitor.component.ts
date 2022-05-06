import { Component, OnInit, Input } from '@angular/core';
import { Router } from'@angular/router';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  @Input() public monitor: any;

  constructor() {

  }

  ngOnInit(): void {
  }

  showDetails(){

  }

}
