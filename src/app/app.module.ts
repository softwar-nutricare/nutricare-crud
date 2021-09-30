import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './pages/body/body.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import {MaterialModule} from "./modules/material.module";
import { NutritionistsComponent } from './pages/nutritionists/pages/nutritionists/nutritionists.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    NutritionistsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }