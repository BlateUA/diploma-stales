import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppComponent } from './app.component';

import { RoutingModule } from './routing.module';

import { PageNotFoundComponent } from './page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SteelPageComponent } from './steel-page/steel-page.component';
import { SteelsListPageComponent } from './steels-list-page/steels-list-page.component';
import { SteelsSearchPageComponent } from './steels-search-page/steels-search-page.component';
import { ComparativePageComponent } from './comparative-page/comparative-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainPageComponent,
    CategoriesPageComponent,
    AboutPageComponent,
    SteelPageComponent,
    SteelsListPageComponent,
    SteelsSearchPageComponent,
    ComparativePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule,
    ChartsModule,
    InfiniteScrollModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
