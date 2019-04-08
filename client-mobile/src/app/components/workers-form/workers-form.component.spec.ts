import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersFormComponent } from './workers-form.component';

describe('WorkersFormComponent', () => {
  let component: WorkersFormComponent;
  let fixture: ComponentFixture<WorkersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersFormComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
