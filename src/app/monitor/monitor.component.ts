import { Component, OnInit, Input } from '@angular/core';
import { Router } from'@angular/router';
import { MonitorDataService } from '../monitor-data.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  @Input() public monitor: any;
  public contact: any;

  constructor(private _router: Router, private _monitorService: MonitorDataService) {

  }

  ngOnInit(): void {
    console.log(this.monitor.relationships.field_contact.data.id);
    this._monitorService.getContact(this.monitor.relationships.field_contact.data.id).subscribe(val => (this.contact = val.data));
    console.log(this.contact);
  }

  showDetails(){
    //console.log(this.monitor.id);
    this._router.navigateByUrl(`/monitor/detail/${this.monitor.id}`)
  }

}
