import { Component, OnInit } from '@angular/core';
import { AppWorkerService } from '../app-worker.service';
import { Category } from '../consts/interfaces';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {

  private categories: Category[];

  constructor(private api: AppWorkerService) {
    api.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

  ngOnInit() {

  }

}
