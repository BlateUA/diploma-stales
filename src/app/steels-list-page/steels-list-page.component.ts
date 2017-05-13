import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppWorkerService } from '../app-worker.service';
import {Category, Steel} from '../consts/interfaces';

@Component({
  selector: 'app-stales-list-page',
  templateUrl: './steels-list-page.component.html',
  styleUrls: ['./steels-list-page.component.css']
})
export class SteelsListPageComponent implements OnInit {

  api: AppWorkerService;
  categoryId: string;
  category: Category;
  steels: Steel[];
  private skip = 0;

  constructor(activeRoute: ActivatedRoute, api: AppWorkerService) {
    this.api = api;
    this.categoryId = activeRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.api.getCategoryById(this.categoryId).subscribe(res => this.category = res[0]);
    this.api.getSteelsById(this.categoryId, this.skip).subscribe(res => {
      if ( res && res.length ) {
        this.steels = res;
        this.skip += 15;
      }
    });
  }

  getMoreSteels() {
    this.api.getSteelsById(this.categoryId, this.skip ).subscribe(res => {
      res.map(steel => this.steels.push(steel));
    });
    this.skip += 15;
  }
  onScrollDown() {
    this.getMoreSteels();
  }

}
