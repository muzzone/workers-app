import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-workers-filter',
  templateUrl: './workers-filter.component.html',
  styleUrls: ['./workers-filter.component.scss'],
})
export class WorkersFilterComponent implements OnInit {

  constructor(public modalController: ModalController, private fb: FormBuilder) { }

  filterForm: FormGroup;

  ngOnInit() {
    this.filterForm = this.fb.group({
      gender: [null],
      salary: [null],
      dateFrom: [null],
      dateTo: [null]
    });
  }

  submit() {
    const form = this.filterForm.value;
    form.salaryMin = form.salary.lower;
    form.salaryMax = form.salary.upper;
    delete form.salary;
  }

  close() {
    this.modalController.dismiss();
  }

}
