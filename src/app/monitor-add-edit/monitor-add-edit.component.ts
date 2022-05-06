import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MonitorDataService } from '../monitor-data.service';

@Component({
  selector: 'app-monitor-add-edit',
  templateUrl: './monitor-add-edit.component.html',
  styleUrls: ['./monitor-add-edit.component.css']
})
export class MonitorAddEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  addMode: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private monitorService: MonitorDataService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.addMode = !this.id;


    this.form = new FormGroup({
      name: new FormControl('test'),
      url: new FormControl('url'),
      interval: new FormControl(''),
      contact: new FormControl('')
    })
  }

}
