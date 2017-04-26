import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stale-page',
  templateUrl: './stale-page.component.html',
  styleUrls: ['./stale-page.component.css']
})
export class StalePageComponent implements OnInit {

  staleId: string;

  constructor(activeRoute: ActivatedRoute) {
    this.staleId = activeRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
