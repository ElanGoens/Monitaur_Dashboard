import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorAddEditComponent } from './monitor-add-edit.component';

describe('MonitorAddEditComponent', () => {
  let component: MonitorAddEditComponent;
  let fixture: ComponentFixture<MonitorAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
