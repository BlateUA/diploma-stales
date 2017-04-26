import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Category } from './consts/interfaces';
import { url } from './consts/consts';

@Injectable()
export class AppWorkerService {

  private categoriesUrl = `${url}/categories`;

  static errorHandler(err: any): Promise<any> {
    console.log(err);
    return Promise.reject(err.message || err);
  }

  constructor(private http: Http) { }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.categoriesUrl)
      .toPromise()
      .then(response => response.json().data as Category[])
      .catch(AppWorkerService.errorHandler);
  }

}
