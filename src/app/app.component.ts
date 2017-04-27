import { Component } from '@angular/core';

import { AppWorkerService } from './app-worker.service';
import { Category } from './consts/interfaces';

@Component({
  selector: 'app-root',
  providers: [AppWorkerService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private categories: Category[];

  constructor(private api: AppWorkerService) {

  }


}
