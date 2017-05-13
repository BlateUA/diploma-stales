import {Component, HostListener, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


import { AppWorkerService } from '../app-worker.service';

import { Steel } from '../consts/interfaces';

@Component({
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  private steels: Steel[];
  private skip = 0;

  constructor(private api: AppWorkerService, @Inject(DOCUMENT) private document: Document) {
    api.getSteels( this.skip ).subscribe(res => {
      this.steels = res;
      this.skip += 15;
    });
  }

  getMoreSteels() {
    this.api.getSteels( this.skip ).subscribe(res => {
      res.map(steel => this.steels.push(steel));
    });
    this.skip += 15;
  }
  onScrollDown() {
    this.getMoreSteels();
  }

  ngOnInit() {

  }

}
