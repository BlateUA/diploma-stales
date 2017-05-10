import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';

import { RoutingModule } from './routing.module';

import { PageNotFoundComponent } from './page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SteelPageComponent } from './steel-page/steel-page.component';
import { SteelsListPageComponent } from './steels-list-page/steels-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainPageComponent,
    CategoriesPageComponent,
    AboutPageComponent,
    SteelPageComponent,
    SteelsListPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ChartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
