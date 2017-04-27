import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Category } from './consts/interfaces';
import { url } from './consts/consts';

@Injectable()
export class AppWorkerService {

  private categoriesUrl = `/api/categories`;
  private steelsUrl = `/api/steels`;

  static errorHandler(err: any): Promise<any> {
    console.log(err);
    return Promise.reject(err.message || err);
  }

  constructor(private http: Http) { }

  getCategories() {
    return this.http.get(this.categoriesUrl)
      .map(res => res.json());
  }

  getSteels() {
    return this.http.get(this.steelsUrl)
      .map(res => res.json());
  }

}
