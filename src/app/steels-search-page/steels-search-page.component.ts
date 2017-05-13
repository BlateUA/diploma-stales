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


  constructor(private activeRoute: ActivatedRoute, api: AppWorkerService) {
    this.api = api;
  }

  ngOnInit() {
    this.sub = this.activeRoute.params.subscribe(params => {
      this.querySearch = params['query'];
      if (this.querySearch) {
        this.api.searchSteels(this.querySearch).subscribe(steels => {
            if (steels && steels.length > 0) {
              this.steels = steels;
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
