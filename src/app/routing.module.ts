import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component'
import { MainPageComponent } from './main-page/main-page.component'
import { CategoriesPageComponent } from './categories-page/categories-page.component'
import { AboutPageComponent } from './about-page/about-page.component'
import { StalesListPageComponent } from './stales-list-page/stales-list-page.component'
import { StalePageComponent } from './stale-page/stale-page.component'

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'item/:id', component: StalePageComponent },
  { path: 'categories', component: CategoriesPageComponent },
  { path: 'categories/:id', component: StalesListPageComponent  },
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
