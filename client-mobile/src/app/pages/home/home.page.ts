import { Component, OnInit, ViewChild } from '@angular/core';
import { Worker } from '../../shared/models/worker.model';
import { WorkersService } from '../../core/workers.service';
import { Router } from '@angular/router';
import { IonInfiniteScroll, LoadingController, ModalController } from '@ionic/angular';
import { ToastService } from '../../core/toast.service';
import { WorkersFilterComponent } from '../../components/workers-filter/workers-filter.component';
import { View } from '../../shared/models/view.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  objectKeys = Object.keys;
  workers: Worker[] = [];
  workersLength: number = 0;
  searchParams: any = {};
  page: number = 1;
  showSearch = false;
  view: View;

  @ViewChild('infiniteScroll')
  infiniteScroll: IonInfiniteScroll;

  constructor(
    private workersService: WorkersService,
    private router: Router,
    private toastService: ToastService,
    public loadingController: LoadingController,
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.fetch();
  }

  fetch(params = {}) {
    this.loadingController.create({
      spinner: 'circles',
      cssClass: 'custom',
    }).then(l => l.present());
    this.workersService[this.view === View.groups ? 'getGroups' : 'getAll'](params).subscribe((response: any) => {
      this.workers = response.docs;
      this.workersLength = response.total;
      this.loadingController.dismiss();
    });
  }

  getParams() {
    return {...this.searchParams, page: this.page};
  }

  toggleSearchToolBar() {
    this.showSearch = !this.showSearch;
  }

  openFilter() {
    this.modalController.create({
      component: WorkersFilterComponent,
      componentProps: {params: this.searchParams}
    }).then(m => {
      m.onDidDismiss().then(result => {
        if (result.data) {
          this.submitFilter(result.data);
        }
      });
      m.present();
    });
  }

  changeView() {
    this.workers = [];
    this.page = 1;
    this.view = this.view === View.groups ? View.list : View.groups;
    this.fetch();
  }

  deleteWorker(id) {
    this.workersService.delete(id).subscribe(res => {
      this.workers = this.workers.filter(item => item._id !== id);
    });
  }

  nextPage(event) {
    this.page ++;
    this.workersService.getAll(this.getParams()).subscribe((res: any) => {
        this.workers.push(...res.docs);
        event.target.complete();
        if (res.pages <= res.page) {
          this.infiniteScroll.disabled = true;
        }
    });
  }

  search(str) {
    this.page = 1;
    try { this.infiniteScroll.disabled = false; } catch (e) {}
    this.searchParams.search = str;
    this.workersService[this.view === View.groups ? 'getGroups' : 'getAll'](this.getParams()).subscribe((response: any) => {
      this.workers = response.docs;
    });
  }

  trackByFn(index, item) {
    return item._id;
  }

  submitFilter(form) {
    const params = {};

    this.page = 1;
    try { this.infiniteScroll.disabled = false; } catch (e) {}
    Object.keys(form).forEach(i => {
      form[i] ? params[i] = form[i] : null;
    });
    this.searchParams = params;
    this.fetch(this.getParams());
  }
}
