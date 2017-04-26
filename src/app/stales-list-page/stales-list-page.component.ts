import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stales-list-page',
  templateUrl: './stales-list-page.component.html',
  styleUrls: ['./stales-list-page.component.css']
})
export class StalesListPageComponent implements OnInit {

  categoryId: string;

  constructor(activeRoute: ActivatedRoute) {
    this.categoryId = activeRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
