import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkerPage } from './edit-worker.page';

describe('EditWorkerPage', () => {
  let component: EditWorkerPage;
  let fixture: ComponentFixture<EditWorkerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
