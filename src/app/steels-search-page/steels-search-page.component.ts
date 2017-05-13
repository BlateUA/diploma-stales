import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppWorkerService } from '../app-worker.service';
import {Steel} from '../consts/interfaces';

@Component({
  selector: 'app-stales-list-page',
  templateUrl: './steels-search-page.component.html',
  styleUrls: ['./steels-search-page.component.css']
})
export class SteelsSearchPageComponent implements OnInit, OnDestroy {

  private api: AppWorkerService;
  private querySearch: string;
  steels: Steel[];
  private sub: any;
  private skip = 0;


  constructor(private activeRoute: ActivatedRoute, api: AppWorkerService) {
    this.api = api;
  }

  ngOnInit() {
    this.sub = this.activeRoute.params.subscribe(params => {
      this.querySearch = params['query'];
      if (this.querySearch) {
        this.api.searchSteels(this.querySearch, this.skip).subscribe(steels => {
            if (steels && steels.length > 0) {
              this.steels = steels;
              this.skip += 15;
            } else {
              this.steels = [];
            }
          }
        );
      } else {
        this.steels = [];
      }
    });
  }

  getMoreSteels() {
    this.api.searchSteels(this.querySearch, this.skip).subscribe(res => {
      res.map(steel => this.steels.push(steel));
    });
    this.skip += 15;
  }
  onScrollDown() {
    this.getMoreSteels();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
