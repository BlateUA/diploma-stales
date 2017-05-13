import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SteelsListPageComponent } from './steels-list-page/steels-list-page.component';
import { SteelPageComponent } from './steel-page/steel-page.component';
import {SteelsSearchPageComponent} from './steels-search-page/steels-search-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'steel/:id', component: SteelPageComponent },
  { path: 'categories', component: CategoriesPageComponent },
  { path: 'category/:id', component: SteelsListPageComponent  },
  { path: 'search/:query', component: SteelsSearchPageComponent  },
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
