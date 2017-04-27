import { Component, OnInit } from '@angular/core';

import { AppWorkerService } from '../app-worker.service';

import { Steel } from '../consts/interfaces';

@Component({
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  private steels: Steel[];

  constructor(private api: AppWorkerService) {
    api.getSteels().subscribe(res => {
      this.steels = res;
    });
  }

  ngOnInit() {

  }

}
