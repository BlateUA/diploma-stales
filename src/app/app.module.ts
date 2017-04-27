import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RoutingModule } from './routing.module';

import { PageNotFoundComponent } from './page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { StalePageComponent } from './stale-page/stale-page.component';
import { StalesListPageComponent } from './stales-list-page/stales-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainPageComponent,
    CategoriesPageComponent,
    AboutPageComponent,
    StalePageComponent,
    StalesListPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
