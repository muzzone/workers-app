import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-workers-filter',
  templateUrl: './workers-filter.component.html',
  styleUrls: ['./workers-filter.component.scss'],
})
export class WorkersFilterComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }

}
