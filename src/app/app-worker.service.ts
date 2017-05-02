import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

import { Category } from './consts/interfaces';
import { API, CATEGORIES, CATEGORY, STEEL, STEELS } from './consts/consts';

@Injectable()
export class AppWorkerService {

  static errorHandler(err: any): void {
    console.log(err);
    // return Promise.reject(err.message || err);
  }

  constructor(private http: Http) { }

  getCategories() {
    return this.http.get(`${API}/${CATEGORIES}`)
      .map(res => res.json());
  }

  getCategoryById( id: string ) {
    return this.http.get(`${API}/${CATEGORY}/${id}`).map(res => res.json());
  }

  getSteels() {
    return this.http.get(`${API}/${STEELS}`)
      .map(res => res.json());
  }

  getSteelById( id: string ) {
    return this.http.get(`${API}/${STEEL}/${id}`).map(res => res.json());
  }

  getSteelsById(id: string) {
    return this.http.get(`${API}/${CATEGORY}/${id}/${STEELS}`)
      .map(res => res.json());
  }

}
