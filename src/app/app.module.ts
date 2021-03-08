import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopHomePageComponent } from './top-home-page/top-home-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    TopHomePageComponent,
    SearchBarComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgImageSliderModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
