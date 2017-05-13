import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { API, CATEGORIES, CATEGORY, STEEL, STEELS, SEARCH } from './consts/consts';

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

  getSteels( skip ) {
    return this.http.get(`${API}/${STEELS}/${skip}`)
      .map(res => {
        return res.json();
      });
  }

  getSteelById( id: string ) {
    return this.http.get(`${API}/${STEEL}/${id}`).map(res => res.json());
  }
  // steels by category id
  getSteelsById(id: string, skip) {
    return this.http.get(`${API}/${CATEGORY}/${id}/${STEELS}/${skip}`)
      .map(res => res.json());
  }

  searchSteels(query: string, skip ) {
    return this.http.get(`${API}/${SEARCH}/${query}/${skip}`)
      .map(res => res.json());
  }

}
