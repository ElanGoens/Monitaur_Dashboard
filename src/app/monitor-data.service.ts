import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monitor } from './monitor/monitor.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonitorDataService {

  constructor(private http: HttpClient) {
  }


  getMonitor$(id: string) : Observable<any>{
    return this.http.get(`http://monitaur.docker.localhost:81/jsonapi/node/monitor/${id}`);
  }

  get monitors$() : Observable<any>{
    return this.http.get('http://monitaur.docker.localhost:81/jsonapi/node/monitor');
  }

  getContact(id: string) : Observable<any> {
    return this.http.get(`http://monitaur.docker.localhost:81/jsonapi/node/contact/${id}`);
  }

  get contacts$() : Observable<any> {
    return this.http.get(`http://monitaur.docker.localhost:81/jsonapi/node/contact`);
  }
 }
