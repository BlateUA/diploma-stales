import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { API, CATEGORIES, CATEGORY, STEEL, STEELS, SEARCH } from './consts/consts';

@Injectable()
export class AppWorkerService {

  static errorHandler(err: any): void {
    console.log(err);
  }

  constructor(private http: Http) { }
  // get all categories
  getCategories() {
    return this.http.get(`${API}/${CATEGORIES}`)
      .map(res => res.json());
  }
  // get category with id from param
  getCategoryById( id: string ) {
    return this.http.get(`${API}/${CATEGORY}/${id}`).map(res => res.json());
  }
  // get all steels
  getSteels( skip ) {
    return this.http.get(`${API}/${STEELS}/${skip}`)
      .map(res => {
        return res.json();
      });
  }
  // get steel with id from param
  getSteelById( id: string ) {
    return this.http.get(`${API}/${STEEL}/${id}`).map(res => res.json());
  }
  // steels by category id
  getSteelsById(id: string, skip) {
    return this.http.get(`${API}/${CATEGORY}/${id}/${STEELS}/${skip}`)
      .map(res => res.json());
  }
  // get steels with query from param
  searchSteels(query: string, skip ) {
    return this.http.get(`${API}/${SEARCH}/${query}/${skip}`)
      .map(res => res.json());
  }

}
