import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-workers-filter',
  templateUrl: './workers-filter.component.html',
  styleUrls: ['./workers-filter.component.scss'],
})
export class WorkersFilterComponent implements OnInit {
  @Input()
  params;

  constructor(public modalController: ModalController, private fb: FormBuilder) { }

  filterForm: FormGroup;

  ngOnInit() {
    this.filterForm = this.fb.group({
      gender: [this.params.gender],
      salary: [{
        upper: this.params.salaryMax || 10000,
        lower: this.params.salaryMin || 100
      }],
      dateFrom: [this.params.dateFrom && new Date(this.params.dateFrom).toISOString()],
      dateTo: [this.params.dateTo && new Date(this.params.dateTo).toISOString()]
    });
  }

  close() {
    this.modalController.dismiss();
  }

  clear() {
    Object.keys(this.filterForm.controls).forEach((ctrl: any) => {
      this.filterForm.controls[ctrl].setValue(null);
    });
  }

  apply() {
    const form = this.filterForm.value;
    form.salaryMin = form.salary.lower;
    form.salaryMax = form.salary.upper;
    form.dateFrom ? form.dateFrom = new Date(form.dateFrom) : null;
    form.dateTo ? form.dateTo = new Date(form.dateTo) : null;
    delete form.salary;
    this.modalController.dismiss(form);
  }

}
