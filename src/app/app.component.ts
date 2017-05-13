import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AppWorkerService } from './app-worker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  providers: [AppWorkerService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public searchForm = this.fb.group({
    query: ['', Validators.required]
  });

  constructor(private api: AppWorkerService, private router: Router, private fb: FormBuilder) {

  }
  searchHandler( event ) {
    this.router.navigateByUrl( `/search/${this.searchForm.value.query}` );
    this.searchForm.value.delete();
  }

}
