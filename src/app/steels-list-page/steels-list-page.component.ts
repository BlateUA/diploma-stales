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

  constructor(activeRoute: ActivatedRoute, api: AppWorkerService) {
    this.api = api;
    this.categoryId = activeRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.api.getCategoryById(this.categoryId).subscribe(res => this.category = res[0]);
    this.api.getSteelsById(this.categoryId).subscribe(res => {
      if ( res && res.length ) {
        this.steels = res;
        for (let i = 0; i < 10; i++) {
          this.steels.push(this.steels[0]);
        }
      }
    });
  }

}
